function init() {
  var videos = [
    {
      title: "How GPS Works",
      img: "res/thump-gps.jpg",
      views: "2M",
      creator: "Reminz",
      createdAt: "2 Days",
      creatorImg: "res/pp.jpg",
      actionPath: "pages/docs-gps/",
    },
    {
      title: "What is TCP/IP?",
      img: "res/thump-tcp-ip.webp",
      views: "1.3M",
      creator: "Techquickie",
      createdAt: "4 Years",
      creatorImg: "res/Techquickie.jpg",
      actionPath: "pages/docs-tcp-ip/",
    },
    {
      title: "How a DNS Server (Domain Name System) works ?",
      img: "res/dns-server.webp",
      views: "3.5M",
      creator: "PowerCert Animated Videos",
      createdAt: "5 Years",
      creatorImg: "res/dns-pp.jpg",
      actionPath: "pages/docs-dns-ip/",
    },
    {
      title: "SSDs vs Hard Drives as Fast As Possible",
      img: "res/hdd-ssd.jpg",
      views: "2.58M",
      creator: "Techquickie",
      createdAt: "8 Years",
      creatorImg: "res/Techquickie.jpg",
      actionPath: "pages/docs-ssd-hdd/",
    },
    {
      title: "How does transistor work?",
      img: "res/transistor-thump.jpg",
      views: "3.5M",
      creator: "Veritasium",
      createdAt: "9 Years",
      creatorImg: "res/veritasium.jpg",
      actionPath: "pages/docs-transistors/",
    },
  ];

  let doc = document.getElementById("video-content-location");

  for (let i = 0; i < videos.length; i++) {
    doc.innerHTML += `

        <li onclick="window.location.href='${videos[i].actionPath}'">
        <img src="${videos[i].img}">
        
        <div class="title">
            <img src="${videos[i].creatorImg}" class="user">
            <div class="txt-cont">
                <p>${videos[i].title}</p>
                <p class="txt dim sml ">${videos[i].creator}</p>
                <p class="txt dim sml">${videos[i].views} views . ${videos[i].createdAt} ago</p>
            </div>
        </div>

        </li>
        `;
  }
}

let myApp = {
  sidebar: {
    // this is the object which handles sidebar actions

    rootObj: document.querySelector(":root"),
    // gets root object for css,

    state: false,
    // true for open false for close

    // opens sidebar
    open: function () {
      let rs = getComputedStyle(this.rootObj);
      // rs.getPropertyValue('--blue');
      // rootObj.style.setProperty('--blue', 'lightblue');
      this.state = true;
    },

    // closes sidebar
    close: function () {
      this.state = false;
    },

    // returns all current values and state
    get: function () {
      let state = this.state == true ? "OPEN" : "CLOSE";

      return {
        value: getComputedStyle(this.rootObj).getPropertyValue("--sidebarTogglerLen"),
        state: state,
      };
    },
  },
};

// --------------------------------

let dummyCode = `
<li>
<img src="/res/thump${i}.webp">

<div class="title">
    <img src="/res/user-pp.jpg" class="user">
    <div class="txt-cont">
        <strong> ${videos[i].Title}</strong><br>
        <p class="txt dim sml ">Reminz</p>
        <p class="txt dim sml">2M views . 1 Month ago</p>
    </div>
</div>

<div class="more-option">
    <button class="txt dim"><img src="/res/clock.svg"> Watch later</button>
    <button class="txt dim"><img src="/res/queue.svg"> Add to queue</button>
</div>
</li>`;
