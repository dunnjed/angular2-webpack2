import { it, describe, expect, inject, beforeEachProviders, TestComponentBuilder } from 'angular2/testing';
import { provide } from 'angular2/core';
import { Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT } from 'angular2/router';
import { Location } from 'angular2/platform/common';
import { RootRouter } from 'angular2/src/router/router';

import { SpyLocation } from 'angular2/src/mock/location_mock';

import { App } from './app';

import { setBaseTestProviders } from 'angular2/testing';
import { TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS } from 'angular2/platform/testing/browser';
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

describe('App', () => {

  // unit tests which uses Router: https://github.com/mgechev/angular2-seed/blob/master/app/components/app/app_spec.ts#L30
  beforeEachProviders(() => [
    RouteRegistry,
    provide(Location, { useClass: SpyLocation }),
    provide(ROUTER_PRIMARY_COMPONENT, { useValue: App }),
    provide(Router, { useClass: RootRouter })
  ]);

  it('should be able to test', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(App).then((componentFixture) => {
      componentFixture.detectChanges();
      expect(true).toBe(true);
    });
  }));

});
