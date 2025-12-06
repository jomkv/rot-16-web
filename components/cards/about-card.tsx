import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function AboutCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About ROT16</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-base text-muted-foreground">
        <p className="text-justify">
          ROT16 is a letter substitution cipher that shifts each letter by 16
          positions in the alphabet. It{"'"}s a variant of the more famous ROT13
          cipher.
        </p>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
