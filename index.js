//为table绑定
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

new Vue({
    el:"#content",
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
            sixs:0,
            sevens:0,
            eights:0
        },
    },

    methods:{
        
    },
    computed:{
        ccrs:function(){
            let ccr = [];
            ccr[0] = (20 - this.ccrs_sobj.fs)*0.1;
            ccr[1] = (20 - this.ccrs_sobj.ss)*0.1;
            ccr[2] = (20 - this.ccrs_sobj.ts)*0.1;
            ccr[3] = (20 - this.ccrs_sobj.forths)*0.1;
            ccr[4] = (30 - this.ccrs_sobj.fives)*0.1;
            ccr[5] = (30 - this.ccrs_sobj.sixs)*0.1;
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
            ccrs[0] = (50 - this.fcws_sobj.fs)/50;
            ccrs[1] = (50 - this.fcws_sobj.ss)/50;
            ccrs[2] = (60 - this.fcws_sobj.ts)*3/60;
            ccrs[3] = (60 - this.fcws_sobj.forths)*3/60;
            ccrs[4] = (70 - this.fcws_sobj.fives)/70;
            ccrs[5] = (70 - this.fcws_sobj.sixs)/70;
            ccrs[6] = (80 - this.fcws_sobj.sevens)*2/80;
            ccrs[7] = (80 - this.fcws_sobj.eights)*2/80;
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

            let screen =  this.totalccrs[0]/(this.totalccrs[0]+this.totalfcws[0])*arrsum(this.ccrs)/14*4 + this.totalfcws[0]/(this.totalccrs[0]+this.totalfcws[0])*arrsum(this.fcws_scores)/14*4;
            return [screen,screen.toFixed(3)]
        },
        screenrate:function(){
            let x = this.screenscore[0]/4*100
            let xx = x.toFixed(2) + "%";
            return xx
        } 
    }
});