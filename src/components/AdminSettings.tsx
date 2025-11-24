import { useState } from 'react';
import { Settings, HelpCircle, Bell, FileText, Shield } from 'lucide-react';
import { Switch } from './ui/switch';
import { FAQManagement } from './FAQManagement';

export function AdminSettings() {
  const [activeSubTab, setActiveSubTab] = useState('faq');
  
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    orderAlerts: true,
    stockAlerts: true,
    salesReports: false,
    systemUpdates: true
  });

  const [systemSettings, setSystemSettings] = useState({
    autoStockSync: true,
    orderAutoConfirm: true,
    lowStockThreshold: '5',
    currencySymbol: 'Rp',
    timezone: 'Asia/Jakarta'
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [apiKeys, setApiKeys] = useState({
    paymentGateway: '',
    shipping: ''
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSystemChange = (key: string, value: string | boolean) => {
    setSystemSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveNotifications = () => {
    // Save notification settings
  };

  const handleSaveSystemSettings = () => {
    // Save system settings
  };

  const handleUpdatePassword = () => {
    // Update password logic
  };

  const handleUpdateApiKeys = () => {
    // Update API keys logic
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Settings className="w-5 h-5 text-neutral-950" />
          <h2 className="font-bold text-neutral-950">Pengaturan Admin</h2>
        </div>
        <p className="text-sm text-[#717182]">Kelola pengaturan sistem dan preferensi admin</p>
      </div>

      {/* Sub Navigation Tabs */}
      <div className="bg-white rounded-lg border border-black/10 mb-6">
        <div className="flex gap-2 p-2">
          <button
            onClick={() => setActiveSubTab('faq')}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
              activeSubTab === 'faq'
                ? 'bg-[#f8f8f8] text-neutral-950 font-medium'
                : 'text-[#717182] hover:bg-gray-50'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            FAQ Management
          </button>
          <button
            onClick={() => setActiveSubTab('notifications')}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
              activeSubTab === 'notifications'
                ? 'bg-[#f8f8f8] text-neutral-950 font-medium'
                : 'text-[#717182] hover:bg-gray-50'
            }`}
          >
            <Bell className="w-4 h-4" />
            Notifikasi
          </button>
          <button
            onClick={() => setActiveSubTab('system')}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
              activeSubTab === 'system'
                ? 'bg-[#f8f8f8] text-neutral-950 font-medium'
                : 'text-[#717182] hover:bg-gray-50'
            }`}
          >
            <FileText className="w-4 h-4" />
            Sistem
          </button>
          <button
            onClick={() => setActiveSubTab('security')}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
              activeSubTab === 'security'
                ? 'bg-[#f8f8f8] text-neutral-950 font-medium'
                : 'text-[#717182] hover:bg-gray-50'
            }`}
          >
            <Shield className="w-4 h-4" />
            Keamanan
          </button>
        </div>
      </div>

      {/* Content */}
      {activeSubTab === 'faq' && <FAQManagement />}

      {activeSubTab === 'notifications' && (
        <div className="bg-white rounded-lg border border-black/10 p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="w-5 h-5 text-neutral-950" />
              <h3 className="font-bold text-neutral-950">Pengaturan Notifikasi</h3>
            </div>
            <p className="text-sm text-[#717182]">Kelola notifikasi dan alert untuk admin</p>
          </div>

          <div className="space-y-6">
            {/* Email Notifications */}
            <div className="flex items-center justify-between pb-4">
              <div>
                <h4 className="text-sm font-medium text-neutral-950 mb-1">Email Notifications</h4>
                <p className="text-xs text-[#717182]">Terima notifikasi melalui email</p>
              </div>
              <Switch
                checked={notificationSettings.emailNotifications}
                onCheckedChange={(checked: boolean) => handleNotificationChange('emailNotifications', checked)}
              />
            </div>

            {/* Order Alerts */}
            <div className="flex items-center justify-between pb-4 border-t border-black/10 pt-4">
              <div>
                <h4 className="text-sm font-medium text-neutral-950 mb-1">Order Alerts</h4>
                <p className="text-xs text-[#717182]">Alert untuk pesanan baru</p>
              </div>
              <Switch
                checked={notificationSettings.orderAlerts}
                onCheckedChange={(checked : boolean) => handleNotificationChange('orderAlerts', checked)}
              />
            </div>

            {/* Stock Alerts */}
            <div className="flex items-center justify-between pb-4 border-t border-black/10 pt-4">
              <div>
                <h4 className="text-sm font-medium text-neutral-950 mb-1">Stock Alerts</h4>
                <p className="text-xs text-[#717182]">Alert ketika stok rendah</p>
              </div>
              <Switch
                checked={notificationSettings.stockAlerts}
                onCheckedChange={(checked: boolean) => handleNotificationChange('stockAlerts', checked)}
              />
            </div>

            {/* Sales Reports */}
            <div className="flex items-center justify-between pb-4 border-t border-black/10 pt-4">
              <div>
                <h4 className="text-sm font-medium text-neutral-950 mb-1">Sales Reports</h4>
                <p className="text-xs text-[#717182]">Laporan penjualan harian/mingguan</p>
              </div>
              <Switch
                checked={notificationSettings.salesReports}
                onCheckedChange={(checked : boolean) => handleNotificationChange('salesReports', checked)}
              />
            </div>

            {/* System Updates */}
            <div className="flex items-center justify-between border-t border-black/10 pt-4">
              <div>
                <h4 className="text-sm font-medium text-neutral-950 mb-1">System Updates</h4>
                <p className="text-xs text-[#717182]">Notifikasi update sistem</p>
              </div>
              <Switch
                checked={notificationSettings.systemUpdates}
                onCheckedChange={(checked : boolean) => handleNotificationChange('systemUpdates', checked)}
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 pt-6 border-t border-black/10">
            <button
              onClick={handleSaveNotifications}
              className="px-6 py-2 text-sm text-white bg-[#030213] rounded-lg hover:bg-[#030213]/90"
            >
              Simpan Pengaturan Notifikasi
            </button>
          </div>
        </div>
      )}

      {activeSubTab === 'system' && (
        <div className="bg-white rounded-lg border border-black/10 p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Settings className="w-5 h-5 text-neutral-950" />
              <h3 className="font-bold text-neutral-950">Pengaturan Sistem</h3>
            </div>
            <p className="text-sm text-[#717182]">Konfigurasi sistem dan integrasi</p>
          </div>

          <div className="space-y-6">
            {/* Auto Stock Sync */}
            <div className="flex items-center justify-between pb-4">
              <div>
                <h4 className="text-sm font-medium text-neutral-950 mb-1">Auto Stock Sync</h4>
                <p className="text-xs text-[#717182]">Sinkronisasi stok otomatis dengan sistem offline</p>
              </div>
              <Switch
                checked={systemSettings.autoStockSync}
                onCheckedChange={(checked : boolean) => handleSystemChange('autoStockSync', checked)}
              />
            </div>

            {/* Order Auto Confirm */}
            <div className="flex items-center justify-between pb-4 border-t border-black/10 pt-4">
              <div>
                <h4 className="text-sm font-medium text-neutral-950 mb-1">Order Auto Confirm</h4>
                <p className="text-xs text-[#717182]">Konfirmasi pesanan otomatis setelah pembayaran</p>
              </div>
              <Switch
                checked={systemSettings.orderAutoConfirm}
                onCheckedChange={(checked : boolean) => handleSystemChange('orderAutoConfirm', checked)}
              />
            </div>

            {/* Low Stock Threshold */}
            <div className="border-t border-black/10 pt-4">
              <h4 className="text-sm font-medium text-neutral-950 mb-1">Low Stock Threshold</h4>
              <p className="text-xs text-[#717182] mb-3">Batas minimum stok untuk alert</p>
              <input
                type="number"
                value={systemSettings.lowStockThreshold}
                onChange={(e) => handleSystemChange('lowStockThreshold', e.target.value)}
                className="w-32 h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
              />
            </div>

            {/* Currency Symbol */}
            <div className="border-t border-black/10 pt-4">
              <h4 className="text-sm font-medium text-neutral-950 mb-1">Currency Symbol</h4>
              <p className="text-xs text-[#717182] mb-3">Symbol mata uang yang digunakan</p>
              <input
                type="text"
                value={systemSettings.currencySymbol}
                onChange={(e) => handleSystemChange('currencySymbol', e.target.value)}
                className="w-32 h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
              />
            </div>

            {/* Timezone */}
            <div className="border-t border-black/10 pt-4">
              <h4 className="text-sm font-medium text-neutral-950 mb-1">Timezone</h4>
              <p className="text-xs text-[#717182] mb-3">Zona waktu sistem</p>
              <input
                type="text"
                value={systemSettings.timezone}
                onChange={(e) => handleSystemChange('timezone', e.target.value)}
                className="w-48 h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 pt-6 border-t border-black/10">
            <button
              onClick={handleSaveSystemSettings}
              className="px-6 py-2 text-sm text-white bg-[#030213] rounded-lg hover:bg-[#030213]/90"
            >
              Simpan Pengaturan Sistem
            </button>
          </div>
        </div>
      )}

      {activeSubTab === 'security' && (
        <div className="bg-white rounded-lg border border-black/10 p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-neutral-950" />
              <h3 className="font-bold text-neutral-950">Pengaturan Keamanan</h3>
            </div>
            <p className="text-sm text-[#717182]">Kelola keamanan dan akses admin</p>
          </div>

          <div className="space-y-6">
            {/* Ganti Password Admin */}
            <div>
              <h4 className="text-sm font-medium text-neutral-950 mb-3">Ganti Password Admin</h4>
              <div className="space-y-3">
                <input
                  type="password"
                  placeholder="Password saat ini"
                  value={passwordForm.currentPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, currentPassword: e.target.value }))}
                  className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 placeholder:text-[#717182]"
                />
                <input
                  type="password"
                  placeholder="Password baru"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, newPassword: e.target.value }))}
                  className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 placeholder:text-[#717182]"
                />
                <input
                  type="password"
                  placeholder="Konfirmasi password baru"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 placeholder:text-[#717182]"
                />
                <button
                  onClick={handleUpdatePassword}
                  className="px-6 py-2 text-sm text-white bg-[#030213] rounded-lg hover:bg-[#030213]/90"
                >
                  Update Password
                </button>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="border-t border-black/10 pt-6">
              <h4 className="text-sm font-medium text-neutral-950 mb-1">Two-Factor Authentication</h4>
              <p className="text-xs text-[#717182] mb-3">Tambahkan lapisan keamanan ekstra untuk akun admin</p>
              <button className="px-6 py-2 text-sm text-neutral-950 border border-black/10 rounded-lg hover:bg-gray-50">
                Setup 2FA
              </button>
            </div>

            {/* Session Management */}
            <div className="border-t border-black/10 pt-6">
              <h4 className="text-sm font-medium text-neutral-950 mb-1">Session Management</h4>
              <p className="text-xs text-[#717182] mb-3">Kelola sesi login admin aktif</p>
              <div className="bg-[#f8f8f8] rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-950">Current Session</p>
                  <p className="text-xs text-[#717182]">Chrome - Jakarta, Indonesia</p>
                </div>
                <button className="px-4 py-1.5 text-sm text-neutral-950 border border-black/10 rounded-lg hover:bg-white">
                  Logout
                </button>
              </div>
            </div>

            {/* API Integration */}
            <div className="border-t border-black/10 pt-6">
              <h4 className="text-sm font-medium text-neutral-950 mb-1">API Integration</h4>
              <p className="text-xs text-[#717182] mb-3">Kelola API keys dan integrasi eksternal</p>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-neutral-950 mb-2 block">Payment Gateway API</label>
                  <input
                    type="password"
                    placeholder="API Key"
                    value={apiKeys.paymentGateway}
                    onChange={(e) => setApiKeys(prev => ({ ...prev, paymentGateway: e.target.value }))}
                    className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 placeholder:text-[#717182]"
                  />
                </div>
                <div>
                  <label className="text-sm text-neutral-950 mb-2 block">Shipping API</label>
                  <input
                    type="password"
                    placeholder="API Key"
                    value={apiKeys.shipping}
                    onChange={(e) => setApiKeys(prev => ({ ...prev, shipping: e.target.value }))}
                    className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 placeholder:text-[#717182]"
                  />
                </div>
                <button
                  onClick={handleUpdateApiKeys}
                  className="px-6 py-2 text-sm text-white bg-[#030213] rounded-lg hover:bg-[#030213]/90"
                >
                  Update API Keys
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}