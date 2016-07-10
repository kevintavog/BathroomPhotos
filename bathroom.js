var pixelsPerInch = 11;

var idAndMetadata =  {
    'a1': { 'path': [[0, 0], [4.5, 3.25]],          'image': 'R2R-03.jpg',   'description': "April, 2002: Ridge To River race, Wenatchee, WA" },
    'a2': { 'path': [[4.5, 0], [4.5, 3.25]],        'image': 'P5301685.JPG', 'description': "May, 2003: London, England" },
    'a3': { 'path': [[9, 0], [9, 6.5]],             'image': 'P1010405.JPG', 'description': "April, 2010: Bruges, Belgium" },
    'a4': { 'path': [[18, 0], [5, 6.5]],            'image': 'P1026231.JPG', 'description': "May, 2003: London, England" },
    
    'a5': { 'path': [[0,3.25], [9, 6.25]],          'image': 'IMG_9666.JPG', 'description': "April, 2012: Annecy, France" },
    
    'a6': { 'path': [[0,9.5], [9, 6.25]],           'image': 'IMG_9577.JPG', 'description': "April, 2012: Annecy, France" },
    'a7': { 'path': [[9,6.5], [14, 9.25]],          'image': 'IMG_7728.JPG', 'description': "April, 2012: Paris, France" },
    
    'a8': { 'path': [[0,15.75], [4.75, 6.5]],       'image': 'P1010992.JPG', 'description': "April, 2010: Bruges, Belgium" },
    'a9': { 'path': [[4.75,15.75], [8.5, 6.5]],     'image': 'P5301451.JPG', 'description': "May, 2003: Hampton Court Palace, London, England" },
    'a10': { 'path': [[13.25,15.75], [9.75, 6.5]],  'image': 'IMG_9241.JPG', 'description': "February, 2015: Puerto Morelos, Mexico" },

    'a11': { 'path': [[0,22.25], [11.5, 7.75]],     'image': 'IMG_8510.JPG', 'description': "April, 2012: Versailles, France" },
    'a12': { 'path': [[11.5,22.25], [11.5, 7.75]],  'image': 'IMG_9092.JPG', 'description': "September, 2015: Sonoma County, CA" },

    'a13': { 'path': [[0,30], [8.25, 4.75]],        'image': 'IMG_0654.jpg', 'description': "January, 2014: Seattle, WA" },
    'a14': { 'path': [[8.25,30], [7.5, 4.75]],      'image': 'P1060529.JPG', 'description': "May, 2011: Puerto Peñasco, Mexico" },
    'a15': { 'path': [[15.75,30], [7.25, 4.75]],    'image': 'P5281159.JPG', 'description': "May, 2003: London, England" },


    'b1': { 'path': [[24,0], [18.5, 11.5]],         'image': 'IMG_9475.JPG', 'description': "February, 2015: Puerto Morelos, Mexico" },
    'b2': { 'path': [[42.5,0], [13.5, 9.5]],        'image': 'IMG_1291.JPG', 'description': "October, 2004: Zion National Park, UT" },
    'b3': { 'path': [[56,0], [8, 9.5]],             'image': 'P1066627.JPG', 'description': "January, 2005: Park Güell, Barcelona, Spain" },

    'b4': { 'path': [[24,11.5], [18.5, 12.5]],      'image': 'IMG_7278.JPG', 'description': "April, 2012: Gulfoss, Iceland" },
    'b5': { 'path': [[42.5,9.5], [21.5, 14.5]],     'image': 'IMG_0269.JPG', 'description': "April, 2012: Annecy, France" },

    'b6': { 'path': [[24,23.75], [8.5, 11]],        'image': 'IMG_3659.JPG', 'description': "September, 2007: Stourhead Gardens, Stourton, England" },
    'b7': { 'path': [[32.5,23.75], [16.75, 11]],    'image': 'IMG_7095.JPG', 'description': "April, 2012: Reykjavik, Iceland" },
    'b8': { 'path': [[49.25,23.75], [14.75, 11]],   'image': 'P1010530.JPG', 'description': "April, 2010: Bruges, Belgium" },

    'c1': { 'path': [[65,0], [6.75, 5]],            'image': 'IMG_2667.JPG', 'description': "September, 2007: Perth, Scotland" },
    'c2': { 'path': [[71.75,0], [6.75, 5]],         'image': 'IMG_2642.JPG', 'description': "September, 2007: Perth, Scotland" },
    'c3': { 'path': [[78.5,0], [10, 7]],            'image': 'IMG_7636.JPG', 'description': "September, 2015: Diablo Lake, Whatcom County, WA" },

    'c4': { 'path': [[65,5], [13.5, 9.5]],          'image': 'IMG_5933.JPG', 'description': "February, 2013: San Diego, CA" },
    'c5': { 'path': [[78.5,7], [10, 7]],            'image': 'IMG_1029.JPG', 'description': "May, 2011: Puerto Peñasco, Mexico" },

    'c6': { 'path': [[65,14.5], [13.5, 10.25]],     'image': 'IMG_0656.jpg', 'description': "January, 2014: Seattle, WA" },
    'c7': { 'path': [[78.5,14], [10, 7]],           'image': 'IMG_7075.JPG', 'description': "February, 2013: San Diego, CA" },

    'c8': { 'path': [[65,24.75], [6.75, 5]],        'image': 'IMG_4823.JPG', 'description': "February, 2015: Puerto Morelos, Mexico" },
    'c9': { 'path': [[71.5,24.75], [7, 5]],         'image': 'IMG_2110.JPG', 'description': "September, 2007: Edinburgh, Scotland" },
    'c10': { 'path': [[78.5,21], [10, 7]],          'image': 'IMG_0244.JPG', 'description': "April, 2012: Annecy, France" },

    'c11': { 'path': [[65,29.75], [6.75, 5]],       'image': 'IMG_4146.JPG', 'description': "September, 2007: Kew Gardens, London, England" },
    'c12': { 'path': [[71.5,29.75], [7, 5]],        'image': 'IMG_4993.JPG', 'description': "March, 2015: San Francisco, CA" },
    'c13': { 'path': [[78.5,28], [10, 6.75]],       'image': 'IMG_3071.JPG', 'description': "February, 2015: Tulum, Mexico" },
};

var currentPath;
var currentElement;

function configure() {
    var R = Raphael("paper", 985, 385);
    for (var id in idAndMetadata) {
        var metadata = idAndMetadata[id];
        if (metadata.image) {
            var base = document.getElementById(id);
            var h2 = base.getElementsByClassName('description')[0];
            var img = base.getElementsByClassName('photo')[0];
            h2.textContent = metadata.description;
            img.src = 'photos/' + metadata.image;
        }
        addImage(R, id, idAndMetadata[id].path, id == 'a3');
    }
}

function addImage(R, id, imageArray, select) {
    var path = R.path(coordsToPath(imageArray));
    path.attr({
        fill: "#333",
        stroke: "#666",
        "stroke-width": 1,
        "stroke-linejoin": "round"
    });
    path[0].style.cursor = "pointer";
    path[0].onclick = function() {
        currentElement && (currentElement.style.display = "");
        currentPath && (currentPath.animate({ fill:"#333", stoke: "#666"}, 10));

        path.toFront();
        currentElement = document.getElementById(id);
        currentElement.style.display = "block";

        currentPath = path;
        currentPath.animate({ fill:"#CCC", stoke: "#888"}, 10);
    }

    if (select) {
        path[0].onclick();
    }
}

function coordsToPath(coords) {
    var left = coords[0][0] * pixelsPerInch;
    var top = coords[0][1] * pixelsPerInch;
    var right = left + coords[1][0] * pixelsPerInch;
    var bottom = top + coords[1][1] * pixelsPerInch;
    var p =    'M' + left + ',' + top 
            + ' L' + right + ',' + top 
            + ' L' + right + ',' + bottom 
            + ' L' + left + ',' + bottom 
            + ' z';
    return p;
}
