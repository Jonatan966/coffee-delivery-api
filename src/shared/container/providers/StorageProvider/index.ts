import { container } from 'tsyringe';

import { LocalStorageProvider } from './implementations/ILocalStorageProvider';
import { IStorageProvider } from './IStorageProvider';

const diskStorage = {
  local: LocalStorageProvider,
};

container.register<IStorageProvider>(
  'StorageProvider',
  diskStorage[process.env.STORAGE_DISK]
);
