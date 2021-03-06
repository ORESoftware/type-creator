'use strict';

import * as ts from './generate/typescript';
import * as java from './generate/java';
import * as golang from './generate/golang'
import * as json from './generate/json'
import * as swift from './generate/swift';

import {Writable} from "stream";
import {EVCb} from "./shared";

export interface Generation {
  generateToStream?: (input: object, strm: Writable, cb: EVCb<any>) => void;
  generate?: () => void;
  generateToFiles?: (root: string, input: object, cb: EVCb<any>) => void;
  filePath: string
}

export interface Task {
  lang: string,
  gen: Generation,
  output: {folder: string, file: string},
  options?: {[key:string]: any}
}

export interface GenerationMap {
  [key: string]: Generation
}

export const generators = {
  
  typescript: ts.generation,
  java: java.generation,
  golang: golang.generation,
  json: json.generation,
  swift: swift.generation
  
};

export const gen: GenerationMap = generators;
