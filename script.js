
// navigation functionality
function goToNextAnchor() {
    var anchors = document.anchors;

    console.log("anchors", anchors)

    var loc = window.location.href.replace(/#.*/, "");
    var nextAnchorName;
    var anchorName = window.location.hash.replace(/#/, "");

    // if there is no name in the url go to first algorithm
    if (anchorName == "") {
        nextAnchorName = anchors[0].name;
    }

    // if there is an anchor behind url
    if (anchorName != "") {
        // check which position it is by running through the anchors list
        for (var i=0, iLen=anchors.length; i<iLen; i++) {
        if (anchors[i].name == anchorName) {
            if (i<iLen-1) {
            nextAnchorName = anchors[i+1].name;
            } else {
            nextAnchorName = anchors[0].name;
            }
            //break;
        }
        }
    }

    window.location.href = loc + "#" + nextAnchorName;
    console.log("traget",loc + "#" + nextAnchorName )
} 

function goToPrevAnchor() {
    var anchors = document.anchors;

    var loc = window.location.href.replace(/#.*/, "");
    var prevAnchorName;
    var anchorName = window.location.hash.replace(/#/, "");

    // if there is no name in the url go to first algorithm
    if (anchorName == "") {
        prevAnchorName = anchors[0].name;
    }

    // if there is an anchor behind url
    if (anchorName != "") {
        // check which position it is by running through the anchors list
        for (var i=0, iLen=anchors.length; i<iLen; i++) {
        console.log(anchors[i].name)
        console.log(i)
        if (anchors[i].name == anchorName) {
            if (i!=0) {
            prevAnchorName = anchors[i-1].name;
            } else {
            prevAnchorName = anchors[iLen-1].name;
            }
            //break;
        }
        }
    }

    window.location.href = loc + "#" + prevAnchorName;
    console.log("traget",loc + "#" + prevAnchorName )
} 