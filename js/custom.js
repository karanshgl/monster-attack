var vm=new Vue({
   el: '#app',
    data: {
        userWidth:100,
        monsterWidth:100,
        giveUp:false,
        moves :[]
    },
    methods:{
       userHealth:function(){
           return{
               backgroundColor:'green',
               width: this.userWidth + '%',
               height:'100%'
           };
       },
        monsterHealth:function(){
           return{
               backgroundColor:'green',
               width: this.monsterWidth + '%',
               height:'100%'
           }
       },
        attack:function(){
            var damage=attack(1,10)
            this.userWidth-=damage;
            this.moves.push('Monster attacks, '+damage+'    done');
            damage=attack(1,10);
            this.monsterWidth-=damage;
            this.moves.push('You attack, '+damage+'    done');

            if(this.monsterWidth<0){
                this.monsterWidth=0
                this.giveUp=true;
                alert('You won');
                this.playAgain();
            }
            else if(this.userWidth<0){
                this.userWidth=0
                 this.giveUp=true;
                alert('Monster won');
                this.playAgain();
            }
        },
        Sattack:function(){
            var damage=attack(10,20)
            this.userWidth-=damage;
            this.moves.push('Monster special attacks, '+damage+'    done');
            damage=attack(10,20);
            this.monsterWidth-=damage;
            this.moves.push('You special attack, '+damage+'    done');
            if(this.monsterWidth<0){
                this.monsterWidth=0
                this.giveUp=true;
                alert('You won');
                this.playAgain();
            }
            else if(this.userWidth<0){
                this.userWidth=0
                 this.giveUp=true;
                alert('Monster won');
                this.playAgain();
            }
        },
        heal:function(){ 
            var heal=attack(5,15);
            this.userWidth+=heal;
            this.moves.push('You heal, '+heal+' health regained');

            if(this.userWidth>100)
                this.userWidth=100;  
            heal=attack(1,10);
            this.userWidth-=heal;
            this.moves.push('Monster attacks, '+heal+'    done');

            
        },
        playAgain:function(){
            this.userWidth=100;
            this.monsterWidth=100;
            this.giveUp=false;
            this.moves=[]
        }
    }
});

var attack=function(min,max){
        return Math.floor(Math.random()*max)+min;
}
