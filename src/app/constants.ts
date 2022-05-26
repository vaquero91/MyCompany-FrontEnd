import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core"

@Injectable()
export class Constants {
public static API_ENDPOINT: string = 'https://localhost:7053/api/';
public static headers= new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', '*');
}

