import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.edn.ionic.capacitor',
  appName: 'edn-ionic-capacitor',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
