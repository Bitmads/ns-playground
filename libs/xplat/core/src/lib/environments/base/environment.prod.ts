import { IEnvironment } from '@ns-playground/xplat/core';
import { deepMerge } from '@ns-playground/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
