pg={
    Idx:0,
    todolist:[],
    TmpList:{},
    loadTodolist:function(){},

}


 pg.loadTodolist = function(){


   const localData = JSON.parse( localStorage.getItem("todolist") )



   console.log(localData)

   for(var i in localData){


    console.log(localData[i].Id)

    var htmlStr = "";
             

    if(i%2==0){
        htmlStr += "<li class='todoCell'>";
    }else{
        htmlStr += "<li class='todoCellEven'>";
    }
    htmlStr += "<div>" + localData[i].Message+"</div>";
    htmlStr += "<div class='CloseBtn' data-id='"+localData[i].Id+"' id='"+localData[i].Id+"' onclick='deleteTodo(this)'>  X  </div>";
    htmlStr += "</li>";

    $("#todo_list").append(htmlStr)



    pg.Idx = localData[i].Id

    pg.TmpList = {
        Id : localData[i].Id,
        Message:''+localData[i].Message,

    }
    pg.todolist.push(pg.TmpList)
   }




 }


$(function() {
    console.log( "ready!" );

    $("#todo_value").on("keypress",function(e){

        if(e.which == 13) {

            var Text = $("#todo_value").val()
             
            console.log("aaaa");

            var htmlStr = "";
            
            htmlStr += "<li class='todoCell'>";


            



            htmlStr += "" + Text;
            htmlStr += "</li>";

            pg.Idx++
            pg.TmpList = {
                Id : pg.Idx,
                Message:''+Text,

            }
            pg.todolist.push(pg.TmpList)
            

            localStorage.setItem("todolist",JSON.stringify(pg.todolist))
            
            $("#todo_list").append(htmlStr)
            


            $("#todo_value").val("")
            Reload()
            return false;     
        }
    })


    pg.loadTodolist()
});


function deleteTodo(Obj){



    

    var AI = $(Obj).data("id");

    var deleteId = Obj.id


    var evt = event.target;
    var AI = $(evt).data("id");
   
    console.log(pg.todolist)

 
    

    for(var i in pg.todolist){
        if(pg.todolist[i].Id == deleteId){
            console.log(i)
            pg.todolist.splice(i,1);
        }
    }

    localStorage.setItem("todolist",JSON.stringify(pg.todolist))


    Reload()
}

function Reload(){

        const localData = JSON.parse( localStorage.getItem("todolist") )
     
     

        var htmlStr = "";
        htmlStr += "<ul >"
        for(var i in localData){
     
           
            if(i%2==0){
                htmlStr += "<li class='todoCell'>";
            }else{
                htmlStr += "<li class='todoCellEven'>";
            }
     
         
            
            htmlStr += "<div>" + localData[i].Message+"</div>";
            htmlStr += "<div class='CloseBtn' data-id='"+localData[i].Id+"' id='"+localData[i].Id+"' onclick='deleteTodo(this)'>  X  </div>";
            htmlStr += "</li>";
         
     
         
     

        }
        htmlStr += "</ul >"
        $(".data_area").html(htmlStr)
     
     
     
      
}