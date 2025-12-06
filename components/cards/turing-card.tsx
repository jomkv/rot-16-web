import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function TuringCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Relevance to Turing Machine</CardTitle>
      </CardHeader>
      <CardContent className="text-base text-muted-foreground">
        <p className="text-justify">
          ROT16 shares key similarities with a Turing machine. Both operate on a
          finite alphabet and follow deterministic, step-by-step processes. Like
          a Turing machine reading and writing symbols on a tape, ROT16
          sequentially processes each character, transforming it based on a
          fixed rule before moving to the next. This demonstrates the core
          principle of Turing completeness: any algorithm that can be expressed
          as a series of deterministic transformations can be conceptualized and
          computed using a Turing machine{"'"}s fundamental operations.
        </p>
      </CardContent>
    </Card>
  );
}

export default TuringCard;
