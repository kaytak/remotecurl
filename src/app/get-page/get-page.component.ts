import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Functions } from '@angular/fire/functions';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-get-page',
  templateUrl: './get-page.component.html',
  styleUrls: ['./get-page.component.css']
})
export class GetPageComponent implements OnInit {
  src_doc="hoge";
  curl_service_endpoint="https://apius.reqbin.com/api/v1/requests";

  constructor(private fns: Functions) { 
    this.http.post<any>(this.curl_service_endpoint, this.req_body, httpOptions)
    .pipe(
      //catchError(e=>console.log(e))
      tap(e=>console.log(e))
    ).subscribe();
  }

  ngOnInit(): void {
  }

}

var httpOptions = {
  headers: new HttpHeaders({
    "accept": "*/*",
    "accept-language": "ja,en;q=0.9,en-GB;q=0.8,en-US;q=0.7,fr;q=0.6",
    "cache-control": "no-cache, no-store, must-revalidate",
    "content-type": "application/json",
    "expires": "0",
    "pragma": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Microsoft Edge\";v=\"100\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
  //  "sec-fetch-mode": "cors",
  //  "sec-fetch-site": "same-site",
   "secure": "false",
    "x-token": "",
    'Access-Control-Allow-Origin': '*',
  })
};