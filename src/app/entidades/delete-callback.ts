import { Pokemon } from "./pokemon";

export interface DeleteCallback{
    (pokemon:Pokemon):void;
}