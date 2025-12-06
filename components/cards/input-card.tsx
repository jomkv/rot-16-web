"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";

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
            <Button type="submit" className="w-full">
              {action}
            </Button>
          </div>
        </form>
        <div>
          <Textarea
            placeholder="Output"
            readOnly
            rows={6}
            className="cursor-default"
            value={output}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default InputCard;
