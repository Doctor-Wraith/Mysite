var i = 0;
var txt1 = "Hello, I'm "
var j = 0;
var txt2 = "Thomas"
var speed = 75;
var txt3 = "Hello, "
var p = 0;
var q = 0;
var txt4 = " I am."

function typeWriter() {
    if (i<txt1.length) {
        document.getElementById("title-div").innerHTML += txt1.charAt(i);
        i++
        setTimeout(typeWriter, speed);
    } else {
        if (i=txt1.length) {
            document.getElementById("title-div").innerHTML += '<span id="title-span"></span>';
            i++;
        }
        if (j<txt2.length) {
            document.getElementById("title-span").innerHTML += txt2.charAt(j);
            j++;
            setTimeout(typeWriter, speed)
        }else {
        if (j=txt2.length) {
            document.getElementById("title-div").innerHTML += ".";
            j++
        }
    }
    }
}

function writerType() {
    if (p<txt3.length) {
        document.getElementById("title-div").innerHTML += txt3.charAt(p);
        p++;
        setTimeout(writerType, speed);
    } else {
        if (p=txt3.length) {
            document.getElementById("title-div").innerHTML += '<span id="title-span"></span>';
            p++;
        }
        if (j<txt2.length) {
            document.getElementById("title-span").innerHTML += txt2.charAt(j);
            j++;
            setTimeout(writerType, speed)
        } else {
            if (q<txt4.length) {
                document.getElementById("title-div").innerHTML += txt4.charAt(q);
                q++;
                setTimeout(writerType, speed)
            }
        }
    }
}



if (Math.random() > 0.9) {
    writerType()
} else {typeWriter()}

