import {Request, Response, NextFunction, response} from 'express';
import {describe, expect, test, jest} from '@jest/globals';
import { alertGet } from '../source/controllers/alertController';

describe('Route /alerts', () => (
    test('Get alertGet', () => {
        let mochRequest = {
            body: {
                "none": "none",
            }
        } as Request;

        let mochResponse: any = {
            status: jest.fn(),
            json: jest.fn()
        };
        
        const mochNext: NextFunction = jest.fn();

        alertGet(mochRequest, mochResponse, mochNext);

        console.log(mochResponse);
        
        expect(mochResponse.json())
    }),
    test('Post alertPost', () => {
        let mochRequest = {
            body: {
                user_id: "1233252o4u53o45",
                datetime: new Date('2010-05-2').toISOString(),
                location: "24.0987 2342355",
                hash: "hash-value"
            }
        } as Request;

        let mochResponse: any = {
            status: jest.fn(),
            json: jest.fn()
        };
        
        const mochNext: NextFunction = jest.fn();

        alertGet(mochRequest, mochResponse, mochNext);

        console.log(mochResponse);
        
        expect(mochResponse.json());
    })
));