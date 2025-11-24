import { useState } from 'react';
import { ArrowLeft, MapPin, Plus, Edit, Trash2, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { toast } from 'sonner';

interface Address {
  id: string;
  label: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  isMain: boolean;
}

interface ManageAddressesProps {
  onBackToSettings: () => void;
}

export function ManageAddresses({ onBackToSettings }: ManageAddressesProps) {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      label: 'Rumah',
      fullName: 'John Doe',
      phone: '081234567890',
      address: 'Jl. Sudirman No. 123, RT 01/RW 02',
      city: 'Jakarta Selatan',
      province: 'DKI Jakarta',
      postalCode: '12190',
      isMain: true
    },
    {
      id: '2',
      label: 'Kantor',
      fullName: 'John Doe',
      phone: '081234567890',
      address: 'Jl. Thamrin No. 456, Lt. 15',
      city: 'Jakarta Pusat',
      province: 'DKI Jakarta',
      postalCode: '10230',
      isMain: false
    }
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  
  const [formData, setFormData] = useState({
    label: '',
    fullName: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    isMain: false
  });

  const provinces = [
    'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Banten',
    'Yogyakarta', 'Bali', 'Sumatera Utara', 'Sumatera Barat', 'Riau',
    'Kalimantan Barat', 'Kalimantan Timur', 'Sulawesi Selatan', 'Papua'
  ];

  const resetForm = () => {
    setFormData({
      label: '',
      fullName: '',
      phone: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      isMain: false
    });
  };

  const handleAddAddress = () => {
    if (!formData.label || !formData.fullName || !formData.phone || !formData.address || 
        !formData.city || !formData.province || !formData.postalCode) {
      toast.error('Semua field harus diisi');
      return;
    }

    const newAddress: Address = {
      id: Date.now().toString(),
      ...formData
    };

    // If this is set as main address, update others
    let updatedAddresses = addresses;
    if (formData.isMain) {
      updatedAddresses = addresses.map(addr => ({ ...addr, isMain: false }));
    }

    setAddresses([...updatedAddresses, newAddress]);
    setIsAddModalOpen(false);
    resetForm();
    toast.success('Alamat berhasil ditambahkan');
  };

  const handleEditAddress = () => {
    if (!editingAddress) return;

    if (!formData.label || !formData.fullName || !formData.phone || !formData.address || 
        !formData.city || !formData.province || !formData.postalCode) {
      toast.error('Semua field harus diisi');
      return;
    }

    let updatedAddresses = addresses.map(addr => 
      addr.id === editingAddress.id 
        ? { ...addr, ...formData }
        : formData.isMain ? { ...addr, isMain: false } : addr
    );

    setAddresses(updatedAddresses);
    setIsEditModalOpen(false);
    setEditingAddress(null);
    resetForm();
    toast.success('Alamat berhasil diperbarui');
  };

  const handleDeleteAddress = (id: string) => {
    const addressToDelete = addresses.find(addr => addr.id === id);
    if (addressToDelete?.isMain && addresses.length > 1) {
      // If deleting main address, make the first remaining address main
      const remainingAddresses = addresses.filter(addr => addr.id !== id);
      remainingAddresses[0].isMain = true;
      setAddresses(remainingAddresses);
    } else {
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
    toast.success('Alamat berhasil dihapus');
  };

  const handleSetMainAddress = (id: string) => {
    const updatedAddresses = addresses.map(addr => ({
      ...addr,
      isMain: addr.id === id
    }));
    setAddresses(updatedAddresses);
    toast.success('Alamat utama berhasil diubah');
  };

  const openEditModal = (address: Address) => {
    setEditingAddress(address);
    setFormData({
      label: address.label,
      fullName: address.fullName,
      phone: address.phone,
      address: address.address,
      city: address.city,
      province: address.province,
      postalCode: address.postalCode,
      isMain: address.isMain
    });
    setIsEditModalOpen(true);
  };

  const openAddModal = () => {
    resetForm();
    setIsAddModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onBackToSettings}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Kelola Alamat</h1>
          <p className="text-muted-foreground">Tambah dan edit alamat pengiriman Anda</p>
        </div>
      </div>

      {/* Add Address Button */}
      <div className="mb-6">
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddModal} className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Tambah Alamat Baru
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Tambah Alamat Baru</DialogTitle>
              <DialogDescription>
                Isi form di bawah untuk menambah alamat pengiriman baru
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Label Alamat</Label>
                  <Input
                    placeholder="e.g. Rumah, Kantor"
                    value={formData.label}
                    onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Nama Lengkap</Label>
                  <Input
                    placeholder="Nama penerima"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label>Nomor Telepon</Label>
                <Input
                  placeholder="08123456789"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Alamat Lengkap</Label>
                <Textarea
                  placeholder="Jalan, nomor rumah, RT/RW, kelurahan, kecamatan"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  rows={3}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Kota/Kabupaten</Label>
                  <Input
                    placeholder="Jakarta Selatan"
                    value={formData.city}
                    onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Provinsi</Label>
                  <Select value={formData.province} onValueChange={(value : string) => setFormData(prev => ({ ...prev, province: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Pilih provinsi" />
                    </SelectTrigger>
                    <SelectContent>
                      {provinces.map(province => (
                        <SelectItem key={province} value={province}>{province}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Kode Pos</Label>
                  <Input
                    placeholder="12190"
                    value={formData.postalCode}
                    onChange={(e) => setFormData(prev => ({ ...prev, postalCode: e.target.value }))}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.isMain}
                  onCheckedChange={(checked: boolean) => setFormData(prev => ({ ...prev, isMain: checked }))}
                />
                <Label>Jadikan alamat utama</Label>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                  Batal
                </Button>
                <Button onClick={handleAddAddress}>
                  Simpan Alamat
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Addresses List */}
      <div className="grid gap-4">
        {addresses.map((address) => (
          <Card key={address.id} className={`${address.isMain ? 'border-primary shadow-sm' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium">{address.label}</h3>
                    {address.isMain && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        Alamat Utama
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">{address.fullName}</p>
                    <p>{address.phone}</p>
                    <p>{address.address}</p>
                    <p>{address.city}, {address.province} {address.postalCode}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {!address.isMain && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSetMainAddress(address.id)}
                      className="text-xs"
                    >
                      Jadikan Utama
                    </Button>
                  )}
                  
                  <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditModal(address)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Edit Alamat</DialogTitle>
                        <DialogDescription>
                          Perbarui informasi alamat pengiriman
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Label Alamat</Label>
                            <Input
                              placeholder="e.g. Rumah, Kantor"
                              value={formData.label}
                              onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label>Nama Lengkap</Label>
                            <Input
                              placeholder="Nama penerima"
                              value={formData.fullName}
                              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div>
                          <Label>Nomor Telepon</Label>
                          <Input
                            placeholder="08123456789"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label>Alamat Lengkap</Label>
                          <Textarea
                            placeholder="Jalan, nomor rumah, RT/RW, kelurahan, kecamatan"
                            value={formData.address}
                            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                            rows={3}
                            className="mt-1"
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <Label>Kota/Kabupaten</Label>
                            <Input
                              placeholder="Jakarta Selatan"
                              value={formData.city}
                              onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label>Provinsi</Label>
                            <Select value={formData.province} onValueChange={(value: string) => setFormData(prev => ({ ...prev, province: value }))}>
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Pilih provinsi" />
                              </SelectTrigger>
                              <SelectContent>
                                {provinces.map(province => (
                                  <SelectItem key={province} value={province}>{province}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Kode Pos</Label>
                            <Input
                              placeholder="12190"
                              value={formData.postalCode}
                              onChange={(e) => setFormData(prev => ({ ...prev, postalCode: e.target.value }))}
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={formData.isMain}
                            onCheckedChange={(checked: boolean) => setFormData(prev => ({ ...prev, isMain: checked }))}
                          />
                          <Label>Jadikan alamat utama</Label>
                        </div>

                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
                            Batal
                          </Button>
                          <Button onClick={handleEditAddress}>
                            Simpan Perubahan
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                        disabled={addresses.length === 1}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Hapus Alamat</AlertDialogTitle>
                        <AlertDialogDescription>
                          Apakah Anda yakin ingin menghapus alamat "{address.label}"? 
                          Tindakan ini tidak dapat dibatalkan.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteAddress(address.id)}
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          Hapus
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {addresses.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">Belum ada alamat tersimpan</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Tambahkan alamat pengiriman untuk mempermudah proses checkout
              </p>
              <Button onClick={openAddModal} className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Tambah Alamat Pertama
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}