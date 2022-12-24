var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x267933 );
var camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 10000 );
var controls = new THREE.OrbitControls( camera, renderer.domElement );
var tl;

controls.enabled = false;

camera.position.set( 0, 20, 400 );
controls.update();

var o = new THREE.DirectionalLight(16777215,.8);
o.position.set(1, 1, 100),
scene.add(o);

var light = new THREE.AmbientLight( 0x404040,2 ); // soft white light
scene.add( light );
var pointLight = new THREE.PointLight( 0xffffff, 3, 500 );
pointLight.position.set( 10, 10, 10 );
scene.add( pointLight );
var pointLight2 = new THREE.PointLight( 0xffffff, 2, 500 );
pointLight2.position.set( 100, -10, 10 );
scene.add( pointLight2 );
var geo = new THREE.SphereGeometry( 260, 32, 32,6 );

var mat = new THREE.MeshPhongMaterial( {
    color: 7040624, 
    side: THREE.DoubleSide,
    transparent: !0,
    opacity:0.4,
    metalness:1.0,
    roughness:0.1,
    clearCoat:0.1,
    shininess:90,
    clearCoatRoughness: 0.2,
    reflectivity: 1,
    shading: THREE.SmoothShading
} );

var globe = new THREE.Mesh(geo,mat);
scene.add(globe);

// instantiate a loader
var loader = new THREE.TextureLoader();

// load the snowman
var snowman = new THREE.MeshBasicMaterial({
    map: loader.load("img/snowman.png"),
});
snowman.transparent = true;
snowman.side = THREE.DoubleSide;

// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var smGeo = new THREE.PlaneGeometry(100, 100, -00 );

// combine our image geometry and material into a mesh
var smMesh = new THREE.Mesh(smGeo, snowman);

// set the position of the image mesh in the x,y,z dimensions
smMesh.position.set(100,-50,0)


// add the image to the scene
//scene.add(smMesh);

var quote = new THREE.MeshBasicMaterial({
    map: loader.load("img/booster.png"),
})
//quote.transparent = true;
//quote.side = THREE.DoubleSide;

var quoteGeo = new THREE.PlaneGeometry(250, 50, 0);
var quoteMesh  = new THREE.Mesh(quoteGeo, quote);
quoteMesh.position.set(150,30,0);

// scene.add(quoteMesh);

var lottie = new THREE.MeshBasicMaterial({
    map: loader.load("img/lottie.png"),
});
lottie.transparent = true;

// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var lottieGeo = new THREE.PlaneGeometry(50, 75, 0 );

// combine our image geometry and material into a mesh
var lottieMesh = new THREE.Mesh(lottieGeo, lottie);

// set the position of the image mesh in the x,y,z dimensions
lottieMesh.position.set(-100,-80,0)

// add the image to the scene
scene.add(lottieMesh);

var lottieQuoteMesh = new THREE.MeshBasicMaterial({
    map: loader.load("img/merry-xmas.png"),
})
lottieQuoteMesh.opacity = 1

var lottieQuoteGeo = new THREE.PlaneGeometry(200, 50, 0);
var lottieQuoteMesh = new THREE.Mesh(lottieQuoteGeo, lottieQuoteMesh);
lottieQuoteMesh.position.set(-150, 0, 50);
lottieQuoteMesh.transparent = true

scene.add(lottieQuoteMesh);

var snow = new THREE.Group();

scene.fog = new THREE.FogExp2(2237993,.0015);
var x = 0, y = 0;
function addBranch(count, x, y, z, opts) {
    var points2 = [], l;
    for (i = 0; i < count * 2; i++) {
        if (i % 2 == 1) {
            l = count * 2;
        } else {
            l = count * 4;
        }
        var a = i / count * Math.PI;
        points2.push( new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
    }
    var branchShape = new THREE.Shape(points2);
    var branchGeometry = new THREE.ExtrudeGeometry(branchShape, opts);
    var treemat = new THREE.MeshStandardMaterial({color:0x004011,emissive:0x004011,roughness:0.8});
    var branchMesh = new THREE.Mesh(branchGeometry, treemat);
    branchMesh.position.set(x, y, z);
    branchMesh.rotation.set(Math.PI / 2, 0,Math.random()*10-1);
    scene.add(branchMesh);
}
// options
var options = {
    amount: 2,
    bevelEnabled: true,
    bevelSegments: 1,
    steps: 1
};
// add 10 branches
var iBranchCnt = 14;
for (i1 = 0; i1 < iBranchCnt; i1++) {
    var r =Math.acos(-1+(2 * i1 )/iBranchCnt);
    var z_p = 125*Math.cos(r);
    addBranch(iBranchCnt + 3 - i1, 0, -125 + i1*15, 0, options);
}

var snow1 = new THREE.Path();
snow1.moveTo( 0, 0);
snow1.lineTo(6,0);
snow1.moveTo(8,-2);
snow1.lineTo(6,0);
snow1.moveTo(8,2);
snow1.lineTo(6,0);
snow1.moveTo(4,0);
snow1.lineTo(6,2);
snow1.moveTo(4,0);
snow1.lineTo(6,-2);
snow1.moveTo(4,2);
snow1.lineTo(2,2);
snow1.moveTo(2,2);
snow1.lineTo(2,4);
snow1.moveTo(0,0);
snow1.lineTo(4,4);
snow1.moveTo(4,4);
snow1.lineTo(6,4);
snow1.moveTo(4,4);
snow1.lineTo(4,6);
snow1.moveTo(0,0);
snow1.lineTo(0,4);
snow1.lineTo(2,6);
snow1.moveTo(2,8);
snow1.lineTo(0,6);
snow1.lineTo(-2,8);
snow1.moveTo(0,4);
snow1.lineTo(-2,6);

//q2
 snow1.moveTo( 0, 0);
snow1.lineTo(-6,0);
snow1.moveTo(-8,-2);
snow1.lineTo(-6,0);
snow1.moveTo(-8,2);
snow1.lineTo(-6,0);
snow1.moveTo(-4,0);
snow1.lineTo(-6,2);
snow1.moveTo(-4,0);
snow1.lineTo(-6,-2);
snow1.moveTo(-4,2);
snow1.lineTo(-2,2);
snow1.moveTo(-2,2);
snow1.lineTo(-2,4);
snow1.moveTo(0,0);
snow1.lineTo(-4,4);
snow1.moveTo(-4,4);
snow1.lineTo(-6,4);
snow1.moveTo(-4,4);
snow1.lineTo(-4,6);
snow1.moveTo(0,0);
snow1.lineTo(0,4);
snow1.lineTo(-2,6);
snow1.moveTo(-2,8);
snow1.lineTo(0,6);
snow1.lineTo(-2,8);
snow1.moveTo(0,4);
snow1.lineTo(-2,6);

//q3
 snow1.moveTo( 0, 0);
snow1.lineTo(-6,0);
snow1.moveTo(-8,-2);
snow1.lineTo(-6,0);
snow1.moveTo(-8,-2);
snow1.lineTo(-6,0);
snow1.moveTo(-4,0);
snow1.lineTo(-6,-2);
snow1.moveTo(-4,0);
snow1.lineTo(-6,-2);
snow1.moveTo(-4,-2);
snow1.lineTo(-2,-2);
snow1.moveTo(-2,-2);
snow1.lineTo(-2,-4);
snow1.moveTo(0,0);
snow1.lineTo(-4,-4);
snow1.moveTo(-4,-4);
snow1.lineTo(-6,-4);
snow1.moveTo(-4,-4);
snow1.lineTo(-4,-6);
snow1.moveTo(0,0);
snow1.lineTo(0,-4);
snow1.lineTo(-2,-6);
snow1.moveTo(-2,-8);
snow1.lineTo(0,-6);
snow1.lineTo(-2,-8);
snow1.moveTo(0,4);
snow1.lineTo(-2,-6);

//q4
snow1.moveTo( 0, 0);
snow1.lineTo(6,0);
snow1.moveTo(8,-2);
snow1.lineTo(6,0);
snow1.moveTo(8,-2);
snow1.lineTo(6,0);
snow1.moveTo(4,0);
snow1.lineTo(6,-2);
snow1.moveTo(4,0);
snow1.lineTo(6,-2);
snow1.moveTo(4,-2);
snow1.lineTo(2,-2);
snow1.moveTo(2,-2);
snow1.lineTo(2,-4);
snow1.moveTo(0,0);
snow1.lineTo(4,-4);
snow1.moveTo(4,-4);
snow1.lineTo(6,-4);
snow1.moveTo(4,-4);
snow1.lineTo(4,-6);
snow1.moveTo(0,0);
snow1.lineTo(0,-4);
snow1.lineTo(2,-6);
snow1.moveTo(2,-8);
snow1.lineTo(0,-6);
snow1.lineTo(-2,-8);
snow1.moveTo(0,4);
snow1.lineTo(-2,-6);

var points = snow1.getPoints();

for (var i = 0; i < 200; i++) {
    var smGeo = new THREE.BufferGeometry().setFromPoints(points);
    var material = new THREE.LineBasicMaterial( { color: 0xffffff ,side: THREE.DoubleSide } );
    var smMesh = new THREE.Line( smGeo, material ) ;
    smMesh.scale.set(0.5,0.5,0.5);
    var n = Math.acos(-1+(2 * i )/ 200), t = Math.sqrt(200 * Math.PI) * n;
    smMesh.position.x = 150 * Math.sin( n) * Math.cos( t);
    smMesh.position.y=Math.random()*(150-(-150))-150;
    smMesh.position.z = 150 * Math.cos( n)+Math.floor(Math.random()*40+1);
    snow.add( smMesh );
} 
scene.add(snow);

for (var k = 0; k < snow.children.length; k++) {
    var n = k* 0.075 + Math.PI, r =Math.acos(-1+(2 * k )/snow.children.length),
    t = Math.sqrt(snow.children.length * Math.PI) * n;
    TweenMax.from(snow.children[k].position,6,{x:120 * Math.sin( n) * Math.cos( t),y:Math.random()*(120-(-120))-120})
    TweenMax.to(snow.children[k].position,10,
        {
            bezier: {
                type:"soft", 
                values:[{x:180 * Math.sin( n) * Math.cos( t),y:Math.random()*(120-(-120))-120}, {x:150 * Math.sin( n) * Math.cos( t),y:Math.random()*(120-(-120))-120}, {x:180 * Math.sin( n)+Math.floor(Math.random()*50+1),y:-(k*1.2)+100,z:100*Math.cos(n)}, {x:80 * Math.sin( n)+Math.floor(Math.random()*50+1),y:-(k*1.2)+200,z:100*Math.cos(n)},{x:180 * Math.sin( n)+Math.floor(Math.random()*50+1),y:-(k*1.1)+220,z:100*Math.cos(n)},{x:180 * Math.sin( n) * Math.cos( t),y:Math.random()*(180-(-150))-150},{x:150 * Math.sin( n)+Math.floor(Math.random()*50+1),y:-(k*1.1)+50,z:100*Math.cos(n)},{x:180 * Math.sin( n) * Math.cos( t),y:Math.random()*(120-(-120))-120}],
                autoRotate:true
            },
            repeat: -1,
            ease: Linear.easeNone
        }
    );
}

var geometry3 = new THREE.PlaneGeometry(395,200, 9, 9);
var data = [];

for (var k = 0; k< 100; k++) {
    var r = Math.random()*(110000-10000)+10000;
    data.push(r);
}

for (var i = 0, l = geometry3.vertices.length; i < l; i++) {
    geometry3.vertices[i].z = data[i] / 65535 * 25;
}

var material3 = new THREE.MeshStandardMaterial({
    color: 0xd9efff,
    emissive: 0xd9efff,
    metalness: 1,
    side: THREE.DoubleSide,
    roughness: 0.9,
    shading: THREE.SmoothShading
});

var plane = new THREE.Mesh(geometry3, material3);
scene.add(plane);
var geometry4 = new THREE.SphereGeometry( 230, 32, 32, 0, 2*Math.PI, 0,0.4* Math.PI);
var material4 = new THREE.MeshBasicMaterial( {side: THREE.BackSide, color: 0xd9efff } );
var sphere4 = new THREE.Mesh( geometry4, material4 );
sphere4.position.y=-50;
sphere4.rotation.x=160.05;
scene.add( sphere4 );
plane.position.y=-130;
plane.rotation.x=30;

function animate() {
	requestAnimationFrame( animate );
    controls.update();
	renderer.render( scene, camera );
}

animate();
