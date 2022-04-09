import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Functions, httpsCallableData } from '@angular/fire/functions';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { catchError, Observable, tap } from 'rxjs';

const white_domains=["news.yahoo.co.jp","www.yahoo.co.jp"]

@Component({
  selector: 'app-get-page',
  templateUrl: './get-page.component.html',
  styleUrls: ['./get-page.component.css']
})
export class GetPageComponent implements OnInit {
  public get_curl: (data: any) => Observable<any>;
  src_doc:SafeHtml="hoge";
  curl_service_endpoint="https://apius.reqbin.com/";
  target_url="news.yahoo.co.jp";

  constructor(private fns: Functions,private sanitizer: DomSanitizer) { 
    this.get_curl= httpsCallableData(fns, 'curltool', { timeout: 3_000 })
    //this.http.post<any>(this.curl_service_endpoint, this.req_body, httpOptions)

    this.reload()
  }

  ngOnInit(): void {
  }
  update_url(event:Event){
    console.log(event)
  }
  reload(){
    this.target_url=this.target_url.replace(/^https:\/\//g,"")
    console.log(this.target_url)
    this.get_curl({cmd:"curl",url:this.target_url})
    .pipe(
      //catchError(e=>console.log(e))
      tap(content=>{
        //if(white_domains.includes())
        this.src_doc=this.sanitizer.bypassSecurityTrustHtml(content)
      })
    ).subscribe();
  }
}
