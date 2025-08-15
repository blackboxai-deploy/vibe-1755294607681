"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function HelloWorld() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-red-200/50">
        <CardContent className="p-8 text-center">
          <div className="space-y-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-red-200">
              <span className="text-2xl text-white font-bold">🔥</span>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Hello World!
              </h1>
              
              <p className="text-lg text-red-700 leading-relaxed">
                Welcome to your beautiful Hello World application
              </p>
              
              <p className="text-sm text-red-500">
                Built with Next.js, Tailwind CSS, and shadcn/ui
              </p>
            </div>
            
            <div className="pt-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-red-300/50">
                🚀 Ready to build amazing things!
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}