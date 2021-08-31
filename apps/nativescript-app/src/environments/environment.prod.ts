import { environmentBase } from './environment.base';
import { IEnvironment } from '@ns-playground/xplat/core';
import { environmentProd } from '@ns-playground/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});