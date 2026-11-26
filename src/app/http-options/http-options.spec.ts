
import { TestBed } from '@angular/core/testing';
import {
  HttpClient,
  provideHttpClient
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

import { HttpOptionsService } from './http-options';

describe('HttpOptionsService', () => {
  let service: HttpOptionsService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(HttpOptionsService);
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('doit créer les headers correctement', () => {
    const headers = service.creerHeaders();

    expect(headers.get('Accept'))
      .toBe('application/json');

    expect(headers.getAll('X-Role'))
      .toEqual(['student', 'developer']);
  });

  it('doit créer les paramètres correctement', () => {
    const params = service.creerParams();

    expect(params.get('page')).toBe('1');

    expect(params.getAll('category'))
      .toEqual(['tech', 'marketing']);
  });

  it('doit vérifier l\'immutabilité', () => {
    const original = service.creerParams();

    const modified = original.set('page', '2');

    expect(original.get('page')).toBe('1');
    expect(modified.get('page')).toBe('2');
  });

  it('doit transmettre headers et params dans une requête', () => {
    http.get('/api/demo', {
      headers: service.creerHeaders(),
      params: service.creerParams()
    }).subscribe();

    const req = httpMock.expectOne(
      request => request.url === '/api/demo'
    );

    expect(req.request.method).toBe('GET');

    expect(req.request.headers.getAll('X-Role'))
      .toEqual(['student', 'developer']);

    expect(req.request.params.get('page'))
      .toBe('1');

    expect(req.request.params.getAll('category'))
      .toEqual(['tech', 'marketing']);

    req.flush([]);
  });
});
