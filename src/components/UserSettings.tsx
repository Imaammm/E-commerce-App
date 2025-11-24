import { useState, type Dispatch, type SetStateAction } from 'react';
import { ArrowLeft, User, MapPin, Lock, ShoppingBag, Heart, Bell, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

import type { Page } from '../App';

interface UserSettingsProps {
  currentUser: { id: string; name: string; email: string };
  onNavigate: Dispatch<SetStateAction<Page>>;
  onBackToShopping: () => void;
  onLogout: () => void;
}

export function UserSettings({ currentUser, onNavigate, onBackToShopping, onLogout }: UserSettingsProps) {
  const settingsOptions = [
    {
      id: 'orders',
      title: 'Riwayat Pesanan',
      description: 'Lihat dan kelola pesanan Anda',
      icon: <ShoppingBag className="w-5 h-5" />,
      action: () => onNavigate('orders')
    },
    {
      id: 'addresses',
      title: 'Kelola Alamat',
      description: 'Tambah dan edit alamat pengiriman',
      icon: <MapPin className="w-5 h-5" />,
      action: () => onNavigate('manage-addresses')
    },
    {
      id: 'password',
      title: 'Ganti Password',
      description: 'Ubah password akun Anda',
      icon: <Lock className="w-5 h-5" />,
      action: () => onNavigate('change-password')
    },
    {
      id: 'wishlist',
      title: 'Wishlist Saya',
      description: 'Produk yang Anda sukai',
      icon: <Heart className="w-5 h-5" />,
      action: () => onNavigate('wishlist')
    },
    {
      id: 'notifications',
      title: 'Pengaturan Notifikasi',
      description: 'Kelola preferensi notifikasi',
      icon: <Bell className="w-5 h-5" />,
      action: () => onNavigate('notification-settings')
    },
    {
      id: 'help',
      title: 'Bantuan & FAQ',
      description: 'Pertanyaan yang sering ditanyakan',
      icon: <HelpCircle className="w-5 h-5" />,
      action: () => onNavigate('faq')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onBackToShopping}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Pengaturan Akun</h1>
          <p className="text-muted-foreground">Kelola akun dan preferensi Anda</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* User Profile Card */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-primary" />
              </div>
              <CardTitle>{currentUser.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{currentUser.email}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => onNavigate('edit-profile')}
              >
                Edit Profil
              </Button>
              
              <Separator />
              
              <Button 
                variant="destructive" 
                className="w-full"
                onClick={onLogout}
              >
                Logout
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Settings Options */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Menu Pengaturan</CardTitle>
              <p className="text-sm text-muted-foreground">
                Pilih pengaturan yang ingin Anda kelola
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {settingsOptions.map((option, index) => (
                  <div key={option.id}>
                    <button
                      onClick={option.action}
                      className="w-full flex items-center gap-4 p-4 text-left rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{option.title}</h3>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                      <div className="text-muted-foreground">
                        →
                      </div>
                    </button>
                    {index < settingsOptions.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Aksi Cepat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate('orders')}
                  className="flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Pesanan Terbaru
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate('wishlist')}
                  className="flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Lihat Wishlist
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Account Info */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Informasi Akun</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member sejak</span>
                  <span>Januari 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Pesanan</span>
                  <span>12 pesanan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status Member</span>
                  <span className="text-green-600 font-medium">Active</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}