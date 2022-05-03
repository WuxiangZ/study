function arrsum (arr){
    let sum = 0;  
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
}
    return sum
}

//保留 三位有效数字
function savethree(arr){
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2[i]= arr[i].toFixed(3);
}
    return arr2
}

let scoreArr = [4.000,7.000,2.000,2.000,2.000,0.636,0.571,4.000,1.761,4.000];
let scoreRate = ['100%','100%','100%','100%','100%','63.64%','57.14%','100%','58.82%','100%'];

const vue1 = new Vue({
    el:".sequence1",
    data(){
        return{
        ccrs_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },
        fcws_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0,
            sevens:0,
            eights:0
        },
        }
    },

    computed:{
        
        ccrs:function(){
            let ccr = [];
            ccr[0] = (20 - this.ccrs_sobj.fs)*0.1 >0 ? (20 - this.ccrs_sobj.fs)*0.1 : 0;
            ccr[1] = (20 - this.ccrs_sobj.ss)*0.1 >0 ? (20 - this.ccrs_sobj.ss)*0.1 : 0;
            ccr[2] = (30 - this.ccrs_sobj.ts)/15 >0 ? (30 - this.ccrs_sobj.ts)/15 : 0;
            ccr[3] = (30 - this.ccrs_sobj.forths)/15 >0 ? (30 - this.ccrs_sobj.forths)/15 : 0;
            ccr[4] = (40 - this.ccrs_sobj.fives)*3/40 >0 ? (40 - this.ccrs_sobj.fives)*3/40 : 0;
            ccr[5] = (40 - this.ccrs_sobj.sixs)*3/40 >0 ? (40 - this.ccrs_sobj.sixs)*3/40 : 0;
            return ccr
        },
        ccrsrate:function(){
            let x = arrsum(this.ccrs)/14*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalccrs:function(){
            return [arrsum(this.ccrs),arrsum(this.ccrs).toFixed(3)]
        },
        ccrs_score:function(){
            return savethree(this.ccrs)
        },

        fcws_scores:function(){
            let ccrs = [];
            ccrs[0] = (50 - this.fcws_sobj.fs)/50 >0 ? (50 - this.fcws_sobj.fs)/50 : 0;
            ccrs[1] = (50 - this.fcws_sobj.ss)/50 >0 ? (50 - this.fcws_sobj.ss)/50 : 0;
            ccrs[2] = (60 - this.fcws_sobj.ts)/20 >0 ? (60 - this.fcws_sobj.ts)/20 : 0;
            ccrs[3] = (60 - this.fcws_sobj.forths)/20 >0 ? (60 - this.fcws_sobj.forths)/20 : 0;
            ccrs[4] = (70 - this.fcws_sobj.fives)/70 >0 ? (70 - this.fcws_sobj.fives)/70 : 0;
            ccrs[5] = (70 - this.fcws_sobj.sixs)/70 >0 ? (70 - this.fcws_sobj.sixs)/70 : 0;
            ccrs[6] = (80 - this.fcws_sobj.sevens)*2/80 >0 ? (80 - this.fcws_sobj.sevens)/40 : 0;
            ccrs[7] = (80 - this.fcws_sobj.eights)*2/80 >0 ? (80 - this.fcws_sobj.eights)/40 : 0;
            return ccrs
        },
        fcws_score:function(){
            return savethree(this.fcws_scores)
        },
        fcwsrate:function(){
            let x = arrsum(this.fcws_scores)/14*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalfcws:function(){
            return [arrsum(this.fcws_scores),arrsum(this.fcws_scores).toFixed(3)]
        },

        screenscore:function(){
            let screen =  14/28*arrsum(this.ccrs)/14*4 + 14/28*arrsum(this.fcws_scores)/14*4;
            return [screen,screen.toFixed(3)]
        },
        screenrate:function(){
            let x = this.screenscore[0]/4*100
            let xx = x.toFixed(2) + "%";
            return xx
        } 
    },

    watch: {
        screenscore(newName, oldName) {
            scoreArr[0] = this.screenscore[1]
        },
        screenrate(newName, oldName) {
            scoreRate[0] = this.screenrate
        },
      } 
});

const vue2 = new Vue({
    el:".sequence2",
    data:{
        ccrs_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },

        fcws_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },
    },
    watch: {
        screenscore(newName, oldName) {
            scoreArr[1] = this.screenscore[1]
        },
        screenrate(newName, oldName) {
            scoreRate[1] = this.screenrate
        },
      },
    computed:{
        ccrs:function(){
            let ccr = [];
            ccr[0] = (30 - this.ccrs_sobj.fs)/15 >0 ? (30 - this.ccrs_sobj.fs)/15 : 0;
            ccr[1] = (30 - this.ccrs_sobj.ss)/15 >0 ? (30 - this.ccrs_sobj.ss)/15 : 0;
            ccr[2] = (40 - this.ccrs_sobj.ts)/20 >0 ? (40 - this.ccrs_sobj.ts)/20 : 0;
            ccr[3] = (40 - this.ccrs_sobj.forths)/20 >0 ? (40 - this.ccrs_sobj.forths)/20 : 0;
            ccr[4] = (50 - this.ccrs_sobj.fives)*4/50 >0 ? (50 - this.ccrs_sobj.fives)*4/50 : 0;
            ccr[5] = (50 - this.ccrs_sobj.sixs)*4/50 >0 ? (50 - this.ccrs_sobj.sixs)*4/50 : 0;
            return ccr
        },
        ccrsrate:function(){
            let x = arrsum(this.ccrs)/16*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalccrs:function(){
            return [arrsum(this.ccrs),arrsum(this.ccrs).toFixed(3)]
        },
        ccrs_score:function(){
            return savethree(this.ccrs)
        },

        fcws_scores:function(){
            let ccrs = [];
            ccrs[0] = (60 - this.fcws_sobj.fs)/30 >0 ? (60 - this.fcws_sobj.fs)/30 : 0;
            ccrs[1] = (60 - this.fcws_sobj.ss)/30 >0 ? (60 - this.fcws_sobj.ss)/30 : 0;
            ccrs[2] = (70 - this.fcws_sobj.ts)*3/70 >0 ? (70 - this.fcws_sobj.ts)*3/70 : 0;
            ccrs[3] = (70 - this.fcws_sobj.forths)*3/70 >0 ? (70 - this.fcws_sobj.forths)*3/70 : 0;
            ccrs[4] = (80 - this.fcws_sobj.fives)*3/80 >0 ? (80 - this.fcws_sobj.fives)*3/80 : 0;
            ccrs[5] = (80 - this.fcws_sobj.sixs)*3/80 >0 ? (80 - this.fcws_sobj.sixs)*3/80 : 0;
            return ccrs
        },
        fcws_score:function(){
            return savethree(this.fcws_scores)
        },
        fcwsrate:function(){
            let x = arrsum(this.fcws_scores)/16*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalfcws:function(){
            return [arrsum(this.fcws_scores),arrsum(this.fcws_scores).toFixed(3)]
        },

        screenscore:function(){

            let screen =  16/32*arrsum(this.ccrs)/16*7 + 16/32*arrsum(this.fcws_scores)/16*7;
            return [screen,screen.toFixed(3)]
        },
        screenrate:function(){
            let x = this.screenscore[0]/7*100
            let xx = x.toFixed(2) + "%";
            return xx
        } 
    }
});

const vue3 = "";//zhanwei

const vue4 = new Vue({
    el:".sequence4",
    data:{
        ccrs_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },

        fcws_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },
    },
    watch: {
        screenscore(newName, oldName) {
            scoreArr[2] = this.screenscore[1]
        },
        screenrate(newName, oldName) {
            scoreRate[2] = this.screenrate
        },
      },
    computed:{
        ccrs:function(){
            let ccr = [];
            ccr[0] = (20 - this.ccrs_sobj.fs)/20 >0 ? (20 - this.ccrs_sobj.fs)/20 : 0;
            ccr[1] = (30 - this.ccrs_sobj.ss)/15 >0 ? (30 - this.ccrs_sobj.ss)/15 : 0;
            ccr[2] = (40 - this.ccrs_sobj.ts)/20 >0 ? (40 - this.ccrs_sobj.ts)/20 : 0;
            ccr[3] = (50 - this.ccrs_sobj.forths)/25 >0 ? (50 - this.ccrs_sobj.forths)/25 : 0;
            ccr[4] = (60 - this.ccrs_sobj.fives)/60 >0 ? (60 - this.ccrs_sobj.fives)/60 : 0;
            return ccr
        },
        ccrsrate:function(){
            let x = arrsum(this.ccrs)/8*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalccrs:function(){
            return [arrsum(this.ccrs),arrsum(this.ccrs).toFixed(3)]
        },
        ccrs_score:function(){
            return savethree(this.ccrs)
        },

        fcws_scores:function(){
            let ccr = [];
            ccr[0] = (20 - this.fcws_sobj.fs)/20 >0 ? (20 - this.fcws_sobj.fs)/20 : 0;
            ccr[1] = (30 - this.fcws_sobj.ss)/15 >0 ? (30 - this.fcws_sobj.ss)/15 : 0;
            ccr[2] = (40 - this.fcws_sobj.ts)/20 >0 ? (40 - this.fcws_sobj.ts)/20 : 0;
            ccr[3] = (50 - this.fcws_sobj.forths)/25 >0 ? (50 - this.fcws_sobj.forths)/25 : 0;
            ccr[4] = (60 - this.fcws_sobj.fives)/60 >0 ? (60 - this.fcws_sobj.fives)/60 : 0;
            return ccr
        },
        fcws_score:function(){
            return savethree(this.fcws_scores)
        },
        fcwsrate:function(){
            let x = arrsum(this.fcws_scores)/8*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalfcws:function(){
            return [arrsum(this.fcws_scores),arrsum(this.fcws_scores).toFixed(3)]
        },

        screenscore:function(){

            let screen =  8/(16)*arrsum(this.ccrs)/8*2 + 8/(16)*arrsum(this.fcws_scores)/8*2;
            return [screen,screen.toFixed(3)]
        },
        screenrate:function(){
            let x = this.screenscore[0]/2*100
            let xx = x.toFixed(2) + "%";
            return xx
        } 
    }
});

const vue5 = new Vue({
    el:".sequence5",
    data:{
        ccrs_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },

        fcws_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },
    },
    watch: {
        screenscore(newName, oldName) {
            scoreArr[3] = this.screenscore[1]
        },
        screenrate(newName, oldName) {
            scoreRate[3] = this.screenrate
        },
      },
    computed:{
        ccrs:function(){
            let ccr = [];
            ccr[0] = (20 - this.ccrs_sobj.fs)/20 >0 ? (20 - this.ccrs_sobj.fs)/20 : 0;
            ccr[1] = (30 - this.ccrs_sobj.ss)/30 >0 ? (30 - this.ccrs_sobj.ss)/30 : 0;
            ccr[2] = (40 - this.ccrs_sobj.ts)/20 >0 ? (40 - this.ccrs_sobj.ts)/20 : 0;
            ccr[3] = (50 - this.ccrs_sobj.forths)/25 >0 ? (50 - this.ccrs_sobj.forths)/25 : 0;
            ccr[4] = (60 - this.ccrs_sobj.fives)/60 >0 ? (60 - this.ccrs_sobj.fives)/60 : 0;
            return ccr
        },
        ccrsrate:function(){
            let x = arrsum(this.ccrs)/7*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalccrs:function(){
            return [arrsum(this.ccrs),arrsum(this.ccrs).toFixed(3)]
        },
        ccrs_score:function(){
            return savethree(this.ccrs)
        },

        fcws_scores:function(){
            let ccr = [];
            ccr[0] = (20 - this.fcws_sobj.fs)/20 >0 ? (20 - this.fcws_sobj.fs)/20 : 0;
            ccr[1] = (30 - this.fcws_sobj.ss)/30 >0 ? (30 - this.fcws_sobj.ss)/30 : 0;
            ccr[2] = (40 - this.fcws_sobj.ts)/20 >0 ? (40 - this.fcws_sobj.ts)/20 : 0;
            ccr[3] = (50 - this.fcws_sobj.forths)/25 >0 ? (50 - this.fcws_sobj.forths)/25 : 0;
            ccr[4] = (60 - this.fcws_sobj.fives)/60 >0 ? (60 - this.fcws_sobj.fives)/60 : 0;
            return ccr
        },
        fcws_score:function(){
            return savethree(this.fcws_scores)
        },
        fcwsrate:function(){
            let x = arrsum(this.fcws_scores)/7*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalfcws:function(){
            return [arrsum(this.fcws_scores),arrsum(this.fcws_scores).toFixed(3)]
        },

        screenscore:function(){

            let screen =  7/(14)*arrsum(this.ccrs)/7*2 + 7/(14)*arrsum(this.fcws_scores)/7*2;
            return [screen,screen.toFixed(3)]
        },
        screenrate:function(){
            let x = this.screenscore[0]/2*100
            let xx = x.toFixed(2) + "%";
            return xx
        } 
    }
});

const vue6 = new Vue({
    el:".sequence6",
    data:{
        ccrs_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },

        fcws_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },
    },
    watch: {
        screenscore(newName, oldName) {
            scoreArr[4] = this.screenscore[1]
        },
        screenrate(newName, oldName) {
            scoreRate[4] = this.screenrate
        },
      },
    computed:{
        ccrs:function(){
            let ccr = [];
            ccr[0] = (20 - this.ccrs_sobj.fs)/20 >0 ? (20 - this.ccrs_sobj.fs)/20 : 0;
            ccr[1] = (30 - this.ccrs_sobj.ss)/30 >0 ? (30 - this.ccrs_sobj.ss)/30 : 0;
            ccr[2] = (40 - this.ccrs_sobj.ts)/20 >0 ? (40 - this.ccrs_sobj.ts)/20 : 0;
            ccr[3] = (50 - this.ccrs_sobj.forths)*3/50 >0 ? (50 - this.ccrs_sobj.forths)*3/50 : 0;
            ccr[4] = (60 - this.ccrs_sobj.fives)/30 >0 ? (60 - this.ccrs_sobj.fives)/30 : 0;
            return ccr
        },
        ccrsrate:function(){
            let x = arrsum(this.ccrs)/9*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalccrs:function(){
            return [arrsum(this.ccrs),arrsum(this.ccrs).toFixed(3)]
        },
        ccrs_score:function(){
            return savethree(this.ccrs)
        },

        fcws_scores:function(){
            let ccr = [];
            ccr[0] = (20 - this.fcws_sobj.fs)/20 >0 ? (20 - this.fcws_sobj.fs)/20 : 0;
            ccr[1] = (30 - this.fcws_sobj.ss)/30 >0 ? (30 - this.fcws_sobj.ss)/30 : 0;
            ccr[2] = (40 - this.fcws_sobj.ts)/20 >0 ? (40 - this.fcws_sobj.ts)/20 : 0;
            ccr[3] = (50 - this.fcws_sobj.forths)*3/50 >0 ? (50 - this.fcws_sobj.forths)*3/50 : 0;
            ccr[4] = (60 - this.fcws_sobj.fives)/30 >0 ? (60 - this.fcws_sobj.fives)/30 : 0;
            return ccr
        },
        fcws_score:function(){
            return savethree(this.fcws_scores)
        },
        fcwsrate:function(){
            let x = arrsum(this.fcws_scores)/9*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalfcws:function(){
            return [arrsum(this.fcws_scores),arrsum(this.fcws_scores).toFixed(3)]
        },

        screenscore:function(){

            let screen =  arrsum(this.ccrs)/9*2;
            return [screen,screen.toFixed(3)]
        },
        screenrate:function(){
            let x = this.screenscore[0]/2*100
            let xx = x.toFixed(2) + "%";
            return xx
        } 
    }
});

const vue7 = new Vue({
    el:".sequence7",
    data:{
        ccrs_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },

        fcws_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },
    },
    watch: {
        screenscore(newName, oldName) {
            scoreArr[5] = this.screenscore[1]
        },
        screenrate(newName, oldName) {
            scoreRate[5] = this.screenrate
        },
      },
    computed:{
        ccrs:function(){
            let ccr = [];
            ccr[0] = (20 - this.ccrs_sobj.fs)/20 >0 ? (20 - this.ccrs_sobj.fs)/20 : 0;
            ccr[1] = (30 - this.ccrs_sobj.ss)/30 >0 ? (30 - this.ccrs_sobj.ss)/30 : 0;
            ccr[2] = (40 - this.ccrs_sobj.ts)/20 >0 ? (40 - this.ccrs_sobj.ts)/20 : 0;
            ccr[3] = (50 - this.ccrs_sobj.forths)/25 >0 ? (50 - this.ccrs_sobj.forths)/25 : 0;
            ccr[4] = (60 - this.ccrs_sobj.fives)/60 >0 ? (60 - this.ccrs_sobj.fives)/60 : 0;
            return ccr
        },
        ccrsrate:function(){
            let x = arrsum(this.ccrs)/7*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalccrs:function(){
            return [arrsum(this.ccrs),arrsum(this.ccrs).toFixed(3)]
        },
        ccrs_score:function(){
            return savethree(this.ccrs)
        },

        fcws_scores:function(){
            let ccr = [];
            ccr[0] = (this.fcws_sobj.fs>=1.7) ? 1 : 0;
            ccr[1] = (this.fcws_sobj.ss>=1.7) ? 1 : 0;
            ccr[2] = (this.fcws_sobj.ts>=1.7) ? 1 : 0;
            ccr[3] = (this.fcws_sobj.forths>=1.7) ? 1 : 0;
            return ccr
        },
        fcws_score:function(){
            return savethree(this.fcws_scores)
        },
        fcwsrate:function(){
            let x = arrsum(this.fcws_scores)/4*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalfcws:function(){
            return [arrsum(this.fcws_scores),arrsum(this.fcws_scores).toFixed(3)]
        },

        screenscore:function(){
            let screen = 7/(11)*arrsum(this.ccrs)/7*1 + 4/(11)*arrsum(this.fcws_scores)/4*1;

            return [screen,screen.toFixed(3)]
        },
        screenrate:function(){
            let x = this.screenscore[0]/1*100
            let xx = x.toFixed(2) + "%";
            return xx
        } 
    }
});

const vue8 = new Vue({
    el:".sequence8",
    data:{
        ccrs_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },

        fcws_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },
    },
    watch: {
        screenscore(newName, oldName) {
            scoreArr[6] = this.screenscore[1]
        },
        screenrate(newName, oldName) {
            scoreRate[6] = this.screenrate
        },
      },
    computed:{
        ccrs:function(){
            let ccr = [];
            ccr[0] = (20 - this.ccrs_sobj.fs)/20 >0 ? (20 - this.ccrs_sobj.fs)/20 : 0;
            ccr[1] = (30 - this.ccrs_sobj.ss)/30 >0 ? (30 - this.ccrs_sobj.ss)/30 : 0;
            ccr[2] = (40 - this.ccrs_sobj.ts)/20 >0 ? (40 - this.ccrs_sobj.ts)/20 : 0;
            ccr[3] = (50 - this.ccrs_sobj.forths)/25 >0 ? (50 - this.ccrs_sobj.forths)/25 : 0;
            ccr[4] = (60 - this.ccrs_sobj.fives)/30 >0 ? (60 - this.ccrs_sobj.fives)/30 : 0;
            return ccr
        },
        ccrsrate:function(){
            let x = arrsum(this.ccrs)/8*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalccrs:function(){
            return [arrsum(this.ccrs),arrsum(this.ccrs).toFixed(3)]
        },
        ccrs_score:function(){
            return savethree(this.ccrs)
        },

        fcws_scores:function(){
            let ccr = [];
            ccr[0] = (this.fcws_sobj.fs>=1.7) ? 1 : 0;
            ccr[1] = (this.fcws_sobj.ss>=1.7) ? 1 : 0;
            ccr[2] = (this.fcws_sobj.ts>=1.7) ? 1 : 0;
            ccr[3] = (this.fcws_sobj.forths>=1.7) ? 1 : 0;
            return ccr
        },
        fcws_score:function(){
            return savethree(this.fcws_scores)
        },
        fcwsrate:function(){
            let x = arrsum(this.fcws_scores)/6*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalfcws:function(){
            return [arrsum(this.fcws_scores),arrsum(this.fcws_scores).toFixed(3)]
        },

        screenscore:function(){
            let screen =  8/(14)*arrsum(this.ccrs)/8*1 + 6/(14)*arrsum(this.fcws_scores)/6*1;

            return [screen,screen.toFixed(3)]
        },
        screenrate:function(){
            let x = this.screenscore[0]/1*100
            let xx = x.toFixed(2) + "%";
            return xx
        } 
    }
});

const vue9 = new Vue({
    el:".sequence9",
    data:{
        ccrs_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },

        fcws_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },
    },
    watch: {
        screenscore(newName, oldName) {
            scoreArr[7] = this.screenscore[1]
        },
        screenrate(newName, oldName) {
            scoreRate[7] = this.screenrate
        },
      },
    computed:{
        ccrs:function(){
            let ccr = [];
            ccr[0] = (20 - this.ccrs_sobj.fs)/20 >0 ? (20 - this.ccrs_sobj.fs)/20 : 0;
            ccr[1] = (30 - this.ccrs_sobj.ss)/30 >0 ? (30 - this.ccrs_sobj.ss)/30 : 0;
            ccr[2] = (40 - this.ccrs_sobj.ts)/20 >0 ? (40 - this.ccrs_sobj.ts)/20 : 0;
            ccr[3] = (50 - this.ccrs_sobj.forths)/25 >0 ? (50 - this.ccrs_sobj.forths)/25 : 0;
            ccr[4] = (60 - this.ccrs_sobj.fives)/60 >0 ? (60 - this.ccrs_sobj.fives)/60 : 0;
            return ccr
        },
        ccrsrate:function(){
            let x = arrsum(this.ccrs)/7*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalccrs:function(){
            return [arrsum(this.ccrs),arrsum(this.ccrs).toFixed(3)]
        },
        ccrs_score:function(){
            return savethree(this.ccrs)
        },

        fcws_scores:function(){
            let ccr = [];
            ccr[0] = (this.fcws_sobj.fs>=1.7) ? 1 : 0;
            ccr[1] = (this.fcws_sobj.ss>=1.7) ? 1 : 0;
            ccr[2] = (this.fcws_sobj.ts>=1.7) ? 1 : 0;
            ccr[3] = (this.fcws_sobj.forths>=1.7) ? 1 : 0;
            return ccr
        },
        fcws_score:function(){
            return savethree(this.fcws_scores)
        },
        fcwsrate:function(){
            let x = arrsum(this.fcws_scores)/6*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalfcws:function(){
            return [arrsum(this.fcws_scores),arrsum(this.fcws_scores).toFixed(3)]
        },

        screenscore:function(){
            let screen =  arrsum(this.ccrs)/7*4 ;

            return [screen,screen.toFixed(3)]
        },
        screenrate:function(){
            let x = this.screenscore[0]/4*100
            let xx = x.toFixed(2) + "%";
            return xx
        } 
    }
});

const vue10 = new Vue({
    el:".sequence10",
    data:{
        ccrs_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },

        fcws_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },
    },
    watch: {
        screenscore(newName, oldName) {
            scoreArr[8] = this.screenscore[1]
        },
        screenrate(newName, oldName) {
            scoreRate[8] = this.screenrate
        },
      },
    computed:{
        ccrs:function(){
            let ccr = [];
            ccr[0] = (20 - this.ccrs_sobj.fs)/20 >0 ? (20 - this.ccrs_sobj.fs)/20 : 0;
            ccr[1] = (30 - this.ccrs_sobj.ss)/15 >0 ? (30 - this.ccrs_sobj.ss)/15 : 0;
            ccr[2] = (40 - this.ccrs_sobj.ts)/20 >0 ? (40 - this.ccrs_sobj.ts)/20 : 0;
            ccr[3] = (50 - this.ccrs_sobj.forths)/50*3 >0 ? (50 - this.ccrs_sobj.forths)/50*3 : 0;
            ccr[4] = (60 - this.ccrs_sobj.fives)/30 >0 ? (60 - this.ccrs_sobj.fives)/30 : 0;
            return ccr
        },
        ccrsrate:function(){
            let x = arrsum(this.ccrs)/10*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalccrs:function(){
            return [arrsum(this.ccrs),arrsum(this.ccrs).toFixed(3)]
        },
        ccrs_score:function(){
            return savethree(this.ccrs)
        },

        fcws_scores:function(){
            let ccr = [];
            ccr[0] = (this.fcws_sobj.fs>=1.7) ? 1 : 0;
            ccr[1] = (this.fcws_sobj.ss>=1.7) ? 1 : 0;
            ccr[2] = (this.fcws_sobj.ts>=1.7) ? 1 : 0;
            ccr[3] = (this.fcws_sobj.forths>=1.7) ? 1 : 0;
            return ccr
        },
        fcws_score:function(){
            return savethree(this.fcws_scores)
        },
        fcwsrate:function(){
            let x = arrsum(this.fcws_scores)/7*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalfcws:function(){
            return [arrsum(this.fcws_scores),arrsum(this.fcws_scores).toFixed(3)]
        },

        screenscore:function(){
            let screen =  10/(17)*arrsum(this.ccrs)/10*3 + 7/(17)*arrsum(this.fcws_scores)/7*3;

            return [screen,screen.toFixed(3)]
        },
        screenrate:function(){
            let x = this.screenscore[0]/3*100
            let xx = x.toFixed(2) + "%";
            return xx
        } 
    }
});

const vue11 = new Vue({
    el:".sequence11",
    data:{
        ccrs_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },

        fcws_sobj:{
            fs:0,
            ss:0,
            ts:0,
            forths:0,
            fives:0,
            sixs:0
        },
    },
    watch: {
        screenscore(newName, oldName) {
            scoreArr[9] = this.screenscore[1]
        },
        screenrate(newName, oldName) {
            scoreRate[9] = this.screenrate
        },
      },
    computed:{
        ccrs:function(){
            let ccr = [];
            ccr[0] = 0;
            ccr[1] = 0;
            ccr[2] = (30 - this.ccrs_sobj.ss)/15 >0 ? (30 - this.ccrs_sobj.ss)/15 : 0;
            ccr[3] = (40 - this.ccrs_sobj.ts)/20 >0 ? (40 - this.ccrs_sobj.ts)/20 : 0;
            ccr[4] = (50 - this.ccrs_sobj.forths)/50 >0 ? (50 - this.ccrs_sobj.forths)/50 : 0;
            ccr[5] = (60 - this.ccrs_sobj.fives)/60 >0 ? (60 - this.ccrs_sobj.fives)/60 : 0;
            return ccr
        },
        ccrsrate:function(){
            let x = arrsum(this.ccrs)/6*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalccrs:function(){
            return [arrsum(this.ccrs),arrsum(this.ccrs).toFixed(3)]
        },
        ccrs_score:function(){
            return savethree(this.ccrs)
        },

        fcws_scores:function(){
            let ccr = [];
            ccr[0] = 0;
            ccr[1] = 0;
            ccr[2] = (30 - this.fcws_sobj.ss)/15 >0 ? (30 - this.fcws_sobj.ss)/15 : 0;
            ccr[3] = (40 - this.fcws_sobj.ts)/20 >0 ? (40 - this.fcws_sobj.ts)/20 : 0;
            ccr[4] = (50 - this.fcws_sobj.forths)/50 >0 ? (50 - this.fcws_sobj.forths)/50 : 0;
            ccr[5] = (60 - this.fcws_sobj.fives)/60 >0 ? (60 - this.fcws_sobj.fives)/60 : 0;
            return ccr
        },
        fcws_score:function(){
            return savethree(this.fcws_scores)
        },
        fcwsrate:function(){
            let x = arrsum(this.fcws_scores)/6*100;
            let xx = x.toFixed(2) + "%";
            return xx
        },
        totalfcws:function(){
            return [arrsum(this.fcws_scores),arrsum(this.fcws_scores).toFixed(3)]
        },

        screenscore:function(){

            let screen =  arrsum(this.ccrs)/6*4;
            return [screen,screen.toFixed(3)]
        },
        screenrate:function(){
            let x = this.screenscore[0]/4*100
            let xx = x.toFixed(2) + "%";
            return xx
        } 
    }
});

const vue0 = new Vue({
    el:".FixTable",
    data(){
        return {
            PassRate:[],
            Ps1:0,
            Ps2:0,
            Ps3:0,
            Ps4:0,
            Ps5:0,
            Ps6:0,
            Ps7:0,
            Ps8:0,
            Ps9:0,
            Ps10:0,
            // PassRate:[]
            sfs:0,
            ste:0,
            snt:0,
            rfs:'100%',
            rnt:'88.77%',
            rte:'90.10%'
        }
    },
});

setInterval(function(){
    vue0.Ps1 = scoreArr[0];
    vue0.Ps2 = scoreArr[1];
    vue0.Ps3 = scoreArr[2];
    vue0.Ps4 = scoreArr[3];
    vue0.Ps5 = scoreArr[4];
    vue0.Ps6 = scoreArr[5];
    vue0.Ps7 = scoreArr[6];
    vue0.Ps8 = scoreArr[7];
    vue0.Ps9 = scoreArr[8];
    vue0.Ps10 = scoreArr[9];

    for(var i=0;i<10;i++){
        vue0.PassRate[i] = scoreRate[i];
    }
    for(var i=0;i<10;i++){
        scoreArr[i] = parseFloat(scoreArr[i])
    }
    vue0.sfs = scoreArr[0] + scoreArr[1]
    vue0.ste = scoreArr[2] + scoreArr[3] + scoreArr[4] + scoreArr[5] + scoreArr[6]
    vue0.snt = scoreArr[7] + scoreArr[8] + scoreArr[9];

    let temp1 = (scoreArr[0] + scoreArr[1])/11*100
    let xx1 = temp1.toFixed(2) + "%";
    vue0.rfs = xx1

    let temp2 = (scoreArr[2] + scoreArr[3] + scoreArr[4] + scoreArr[5] + scoreArr[6])/8*100
    let xx2 = temp2.toFixed(2) + "%";
    vue0.rte = xx2

    let temp3 = (scoreArr[7] + scoreArr[8] + scoreArr[9])/11*100
    let xx3 = temp3.toFixed(2) + "%";
    vue0.rnt = xx3

},1000)

