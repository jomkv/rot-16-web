"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Copy, Check } from "lucide-react";

const inputSchema = z.object({
  input: z
    .string()
    .min(1, "Input cannot be empty")
    .regex(
      /^[a-zA-Z\s]*$/,
      "Only alphabetic characters and spaces are allowed"
    ),
});

type InputFormData = z.infer<typeof inputSchema>;

interface InputCardProps {
  handleSubmit: (input: string) => string;
  action: string;
}

function InputCard({ handleSubmit, action }: InputCardProps) {
  const [output, setOutput] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    reset,
  } = useForm<InputFormData>({
    resolver: zodResolver(inputSchema),
    mode: "onChange",
  });

  const processInput = (data: InputFormData) => {
    const result = handleSubmit(data.input);
    reset();
    setOutput(result);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (output) {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card>
      <CardContent className="space-y-4">
        <form onSubmit={onSubmit(processInput)} className="space-y-4">
          <div>
            <Textarea
              placeholder="Input"
              {...register("input")}
              rows={6}
              className={errors.input ? "border-destructive" : ""}
            />
            {errors.input && (
              <p className="text-sm text-destructive mt-2">
                {errors.input.message}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="w-full cursor-pointer">
              {action}
            </Button>
          </div>
        </form>
        <div className="relative">
          <Textarea
            placeholder="Output"
            readOnly
            rows={6}
            className="cursor-default"
            value={output}
          />
          {output && (
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 cursor-pointer"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default InputCard;
