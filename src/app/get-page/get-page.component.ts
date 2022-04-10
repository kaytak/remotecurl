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

  //function_url="http://localhost:5021/knowledge-base1/asia-northeast1/curltool"
  function_url="https://asia-northeast1-knowledge-base1.cloudfunctions.net/curltool"

  constructor(private fns: Functions,private sanitizer: DomSanitizer,private http:HttpClient) { 
    this.get_curl= httpsCallableData(fns, 'curltool', { timeout: 3_000 })
    /*this.http.get(this.function_url+"?q="+this.target_url,{responseType: 'text'})
    .pipe(
      tap(e=>console.log(e))
    )
    .subscribe()*/

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
    //this.get_curl({cmd:"curl",url:this.target_url})
    this.http.get(this.function_url+"?q="+this.target_url,{responseType: 'text'})
    .pipe(
      //catchError(e=>console.log(e))
      tap(content=>{
        //if(white_domains.includes())
        this.src_doc=this.sanitizer.bypassSecurityTrustHtml(content);
        var interval = setTimeout(() => {
          this.siteLoaded();
        }, 3000);
      })
    ).subscribe();
  }
  siteLoaded(){
 // $0.getElementsByTagName("body")[0].addEventListener('click',function(e){console.log(e)})
 var iframe1=document.getElementsByTagName('iframe');
 var content1=iframe1[0].contentDocument;
 if(!content1) return false;
 var body1=content1.getElementsByTagName('body');
 body1[0].addEventListener('click',function(e){console.log(e)});
 console.log(body1[0])
 var anchors = body1[0].getElementsByTagName("a");
 for (var i = 0; i < anchors.length ; i++) {
   anchors[i].addEventListener("click", 
       function (event) {
           event.preventDefault();
           console.log(this.href)
          // if (confirm('Are you sure?')) {
              // window.location = this.href;
          // }
       }, 
       false);
  }
  return true
  }
}
