"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InputCard from "@/components/cards/input-card";
import { decrypt, encrypt } from "@/lib/scripts";
import AboutCard from "@/components/cards/about-card";
import TuringCard from "@/components/cards/turing-card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8 bg-background">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="flex justify-center text-4xl font-bold">
          ROT16 Encryptor/Decryptor
        </h1>
        <Tabs defaultValue="encrypt">
          <TabsList>
            <TabsTrigger value="encrypt">Encrypt</TabsTrigger>
            <TabsTrigger value="decrypt">Decrypt</TabsTrigger>
          </TabsList>
          <TabsContent value="encrypt">
            <InputCard handleSubmit={encrypt} action="Encrypt" />
          </TabsContent>
          <TabsContent value="decrypt">
            <InputCard handleSubmit={decrypt} action="Decrypt" />
          </TabsContent>
        </Tabs>
        <AboutCard />
        <TuringCard />
      </div>
    </div>
  );
}
