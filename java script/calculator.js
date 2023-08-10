let rs=""
    let tr=document.getElementById("t1")
    function fun(d)
    {
        rs=rs+d
        tr.value=rs
    }
    function cal()
    {
        if(rs!="")
        tr.value=eval(tr.value)
    }
    function cl1()
    {
        tr.value=""
        rs=""
    }
    let rc=()=>
    {
        rs=rs.slice(0,rs.length-1)
        tr.value=rs
    }