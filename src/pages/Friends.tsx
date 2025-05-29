
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Camera, PartyPopper, Calendar, Coffee, Pizza, GameController2, LogOut, Heart } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';
import FriendsLogin from '@/components/FriendsLogin';

const Friends = () => {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <FriendsLogin />;
  }

  const funFacts = [
    "Coffee addict ☕", "Pizza lover 🍕", "Gaming enthusiast 🎮", 
    "Party animal 🎉", "Meme collector 😂", "Night owl 🦉"
  ];

  const parties = [
    {
      name: "Warsaw Nights 🌃",
      date: "Every Friday",
      description: "Epic nights out in the city with the crew"
    },
    {
      name: "Gaming Marathon 🎮",
      date: "Weekends",
      description: "All-nighters playing our favorite games"
    },
    {
      name: "Turkish Food Night 🥘",
      date: "Monthly",
      description: "Cooking traditional dishes from home"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      {/* Fun Navigation */}
      <nav className="bg-white/20 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Kayra's Fun Zone 🎉</h1>
            <Button 
              onClick={logout}
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-purple-600"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Avatar className="w-32 h-32 border-4 border-purple-300">
                <AvatarImage 
                  src="/lovable-uploads/0e6a51a2-2094-4ee3-947f-c6725afad98b.png" 
                  alt="Kayra Çelikoğlu" 
                />
                <AvatarFallback className="text-2xl bg-purple-100">KC</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left flex-1">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  Hey Friends! 👋
                </h2>
                <p className="text-xl text-gray-600 mb-4">The REAL Kayra</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Surviving in Warsaw 🥶</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Heart className="w-4 h-4" />
                    <span>Missing Turkish food 😭</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Welcome to my secret hideout! 😎 This is where I share the real stuff - 
                  the messy desk photos, embarrassing party pics, and all the chaos that 
                  comes with being a Turkish student trying to survive Polish winters! 🇹🇷❄️🇵🇱
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fun Facts */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              Fun Facts About Me
            </CardTitle>
            <CardDescription>
              The stuff you actually care about 😄
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {funFacts.map((fact) => (
                <Badge key={fact} variant="secondary" className="px-3 py-1 text-sm bg-purple-100 text-purple-800">
                  {fact}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Party Schedule */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PartyPopper className="w-5 h-5" />
              Our Epic Adventures
            </CardTitle>
            <CardDescription>
              When and where the magic happens ✨
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {parties.map((party, index) => (
                <Card key={index} className="border-2 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {party.name}
                    </CardTitle>
                    <CardDescription className="font-semibold text-purple-600">
                      {party.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{party.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Photo Gallery Placeholder */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              The Gallery of Memories 📸
            </CardTitle>
            <CardDescription>
              Our best (and worst) moments captured forever
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center"
                >
                  <Camera className="w-8 h-8 text-purple-400" />
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Upload some memories here! 📱➡️💻
            </p>
          </CardContent>
        </Card>

        {/* Gaming Section */}
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GameController2 className="w-5 h-5" />
              Gaming Corner 🎮
            </CardTitle>
            <CardDescription>
              My current obsessions and high scores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <GameController2 className="w-16 h-16 mx-auto text-purple-400 mb-4" />
              <p className="text-gray-600">
                Currently addicted to: <span className="font-semibold">Everything</span> 😅
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Steam ID: Ask me in person! 🎯
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fun Footer */}
      <footer className="bg-white/20 backdrop-blur-md text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Pizza className="w-4 h-4" />
            <span>Made with love, coffee, and a lot of pizza 🍕</span>
          </div>
          <p>&copy; 2024 Kayra's Secret Hideout. No screenshots allowed! 📸❌</p>
        </div>
      </footer>
    </div>
  );
};

export default Friends;
