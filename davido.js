const music = new Audio(
    "music/RIHANNA FT EMINEM-LOVE DE WAY U LIE PART II REMIX.mp3"
  );
  
  const songs = [
    {
      id: 1,
      songName: `Assurance`,
       poster: "img/davido/1.jpg",
       artistName: "Alan Walker"
    
    },
    {
      id: 2,
      songName: `Blow My Mind `,
      poster: "img/davido/2.jpg",
      artistName: "Alan Walker"
    
    },
    {
      id: 3,
      songName: `Electricity <br>
      <div class="subtitle">Beyonce</div>`,
      poster: "img/davido/3.jpg",
    },
    {
      id: 4,
      songName: `Aye <br>
      <div class="subtitle">Beyonce</div>`,
      poster: "img/davido/4.jpg",
    },
    {
      id: 5,
      songName: `Fem <br>
      <div class="subtitle">The Chainmokers</div>`,
      poster: "img/davido/5.jpg",
    },
    {
      id: 6,
      songName: `Holy Ground <br>
      <div class="subtitle">Eben</div>
       `,
      poster: "img/davido/6.jpg",
    },
    {
      id: 7,
      songName: ` Fia <br>
      <div class="subtitle">Owie Abutur</div>
   `,
      poster: "img/davido/7.jpg",
    },
    {
      id: 8,
      songName: `Confession`,
      poster: "img/8.jpg",
      artistName: "Omah Lay"
    },
    {
      id: 9,
      songName: `Abule`,
      poster: "img/9.jpg",
      artistName: "Patoranking"
    },
    {
      id: 10,
      songName: `Am In Love`,
      poster: "img/10.jpg",
      artistName: "Patoranking"
    },
    {
      id: 11,
      songName: `Rora`,
      poster: "img/11.jpg",
      artistName: "Reekado Banks"
    },
    {
      id: 12,
      songName: `On The First Day`,
      poster: "img/12.jpg",
      artistName: "Rihanna"
    },
    {
      id: 13,
      songName: `Rehab`,
      poster: "img/13.jpg",
      artistName: "Rihanna"
    },
    {
      id: 14,
      songName: `Still The One`,
      poster: "img/14.jpg",
      artistName: "Shania"
    },
    {
      id: 15,
      songName: `Cheap Thrills`,
      poster: "img/15.jpg",
      artistName: "Sia"
    },
    {
      id: 16,
      songName: `Never Give Up`,
      poster: "img/16.jpg",
      artistName: "Sia"
    },
    {
      id: 17,
     songName: `Saved My Life`,
      poster: "img/17.jpg",
      artistName: "Sia"
    },
    {
      id: 18,
      songName: `Unstoppable`,
      poster: "img/18.jpg",
      artistName: "Sia"
    },
    {
      id: 19,
      songName: `Yahweh`,
      poster: "img/19.jpg",
      artistName: "Steve Crown"
    
    },
    {
      id: 20,
      songName: `Unbreak My Heart`,
      poster: "img/20.jpg",
      artistName: "Tony Braxton"
    },
    {
      id: 21,
      songName: `Soon Be Found`,
      poster: "img/21.jpg",
      artistName: "Sia"
    },
  ];
  
  /**Gives appropiate image, songname and artist-name to the clicked/download songs*/
  Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
    e.getElementsByTagName("img")[0].src = songs[i].poster;
    e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
    const artistNameElement = e.getElementsByClassName("artistname")[0];
    if (artistNameElement) {
      artistNameElement.innerHTML = songs[i].artistName || ""; // Set artist name or empty string
    }
   
  
    
  });
  
  /**Controls playpause btn and wave */
  let masterPlay = document.getElementById("masterPlay");
  let wave = document.getElementById("wave");
  
  masterPlay.addEventListener("click", () => {
    if (music.paused || music.currentTime < 0) {
      music.play();
      wave.classList.add('active1');
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    } else {
      music.pause();
      wave.classList.remove('active1');
      masterPlay.classList.add("fa-play");
      masterPlay.classList.remove("fa-pause");
    }
  });
  
  /**Shows the play icon on the current playing song */
  const makeAllplays = () => {
    Array.from(document.getElementsByClassName('plaListplay')).forEach((el) =>{
      el.classList.remove("fa-circle-pause");
      el.classList.add("fa-circle-play");
      
    });
  }
  
  /**Changes the background color for a better hover effect */
  const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
      el.style.background = 'rgb(105, 105, 105, .0';
    })
  }
  
  /**Updates the display of the current song, title in the master_play and handles the download*/
  let index = 0;
  let poster_master_play = document.getElementById("poster_master_play");
  let download_music = document.getElementById('download_music');
  let title = document.getElementById("title");
  
  Array.from(document.getElementsByClassName("plaListplay")).forEach((e) => {
    e.addEventListener("click", (el) => {
      index = el.target.id;
      music.src = `music/${index}.mp3`;
      poster_master_play.src = `img/${index}.jpg`;
      music.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
      download_music.href = `music/${index}.mp3`;
  
  
      let songTitles = songs.filter((els) => {
        return els.id == index;
      })
  
      songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
      });
  
      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';
  
      makeAllplays();
  
      el.target.classList.add('fa-circle-pause');
      el.target.classList.remove('fa-circle-play');
      wave.classList.add('active1');
     
    });
  });
  
  
  /**Sets currentStart and currentEnd time for the music duration and moves the input along */
  let currentStart = document.getElementById('currentStart');
  let currentEnd = document.getElementById('currentEnd');
  let seek = document.getElementById('seek');
  let bar2 = document.getElementById('bar2');
  let dot = document.getElementsByClassName('dot')[0];
  
  
  music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    //console.log( sec1);
  
    if (sec1 < 10) {
      sec1 = `0${sec1}`;
    }
    currentEnd.innerHTML = `${min1}:${sec1}`;
  
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
  
    if (sec2 < 10) {
      sec2 = `0${sec2}`;
    }
    currentStart.innerHTML = `${min2}:${sec2}`;
  
    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    //console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
  
  });
  
  /**Allows you forward the current playing song */
  seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
  });
  
  
  /**Increase's or decrease's the volume and also changes the vol icon accordingly */
  let vol_icon = document.getElementById('vol_icon');
  let vol = document.getElementById('vol');
  let vol_bar = document.getElementsByClassName('vol_bar')[0];
  let vol_dot = document.getElementById('vol_dot');
  
  vol.addEventListener('change', () => {
      if (vol.value == 0) {
      vol_icon.classList.remove('fa-volume-high');
      vol_icon.classList.remove('fa-volume-low'); 
      vol_icon.classList.add('fa-volume-off');
      }
  
      if (vol.value > 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low'); 
        vol_icon.classList.remove('fa-volume-off');
      }
  
      if (vol.value > 50) {
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low'); 
        vol_icon.classList.remove('fa-volume-off');
      }
  
      let vol_a =  vol.value;
      vol_bar.style.width = `${vol_a}%`;
      vol_dot.style.left = `${vol_a}%`;
      music.volume = vol_a / 100;
  })
  
  /**Controls the forward/backward icons */
  let back = document.getElementById('back');
  let next = document.getElementById('next');
   
  back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
      index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `music/${index}.mp3`;
      poster_master_play.src = `img/${index}.jpg`;
      music.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
  
      let songTitles = songs.filter((els) => {
        return els.id == index;
      })
  
      songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
      });
  
      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';
  
      makeAllplays();
  
      el.target.classList.add('fa-circle-pause');
      el.target.classList.remove('fa-circle-play');
      wave.classList.add('active1');
     
  })
  
  
  next.addEventListener('click', () => {
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
      index = 1;
    }
  
  
  
    music.src = `music/${index}.mp3`;
      poster_master_play.src = `img/${index}.jpg`;
      music.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
  
      let songTitles = songs.filter((els) => {
        return els.id == index;
      })
  
      songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
      });
  
      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';
  
      makeAllplays();
  
      el.target.classList.add('fa-circle-pause');
      el.target.classList.remove('fa-circle-play');
      wave.classList.add('active1');
     
  })
  
  
  
  
  /**Popular_icon and artists icon scroll behaviour*/
  let pop_song_left = document.getElementById("pop_song_left");
  let pop_song_right = document.getElementById("pop_song_right");
  let pop_song = document.getElementsByClassName("pop_song")[0];
  
  let pop_artists_left = document.getElementById("pop_artists_left");
  let pop_artists_right = document.getElementById("pop_artists_right");
  let Artists_box = document.getElementsByClassName("Artists_box")[0];
  
  pop_song_left.addEventListener("click", () => {
    pop_song.scrollLeft += 230;
  });
  
  pop_song_right.addEventListener("click", () => {
    pop_song.scrollLeft -= 230;
  });
  
  pop_artists_left.addEventListener("click", () => {
    Artists_box.scrollLeft += 230;
  });
  
  pop_artists_right.addEventListener("click", () => {
    Artists_box.scrollLeft -= 230;
  });
  
  /**Controls the shuffle icons*/
  let shuffle = document.getElementsByClassName('shuffle')[0];
  
  shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
  
    switch (a) {
      case "next":
        shuffle.classList.add('fa-repeat');
        shuffle.classList.remove('fa-music');
        shuffle.classList.remove('fa-shuffle');
       shuffle.innerHTML = 'repeat';
        break;
    
      case "repeat":
        shuffle.classList.remove('fa-repeat');
        shuffle.classList.remove('fa-music');
        shuffle.classList.add('fa-shuffle');
       shuffle.innerHTML = 'random';
        break;
  
        case "random":
          shuffle.classList.add('fa-repeat');
          shuffle.classList.add('fa-music');
          shuffle.classList.remove('fa-shuffle');
         shuffle.innerHTML = 'next';
          break;
    }
  });
  
  const next_music = () => {
    if (index == songs.length) {
      index = 1
    } else {
      index++;
    }
    music.src = `music/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    download_music.href = `music/${index}.mp3`;
  
  
    let songTitles = songs.filter((els) => {
      return els.id == index;
    })
  
    songTitles.forEach(elss => {
      let {songName} = elss;
      title.innerHTML = songName;
      download_music.setAttribute('download', songName);
    });
  
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';
  
    makeAllplays();
  
    el.target.classList.add('fa-circle-pause');
    el.target.classList.remove('fa-circle-play');
    wave.classList.add('active1');
   
  }
  
  const repeat_music = () => {
    index;
    music.src = `music/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    download_music.href = `music/${index}.mp3`;
  
  
    let songTitles = songs.filter((els) => {
      return els.id == index;
    })
  
    songTitles.forEach(elss => {
      let {songName} = elss;
      title.innerHTML = songName;
      download_music.setAttribute('download', songName);
    });
  
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';
  
    makeAllplays();
  
    el.target.classList.add('fa-circle-pause');
    el.target.classList.remove('fa-circle-play');
    wave.classList.add('active1');
   
  }
  
  const random_music = () => {
    if (index == songs.length) {
      index = 1
    } else {
      index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `music/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    download_music.href = `music/${index}.mp3`;
  
  
    let songTitles = songs.filter((els) => {
      return els.id == index;
    })
  
    songTitles.forEach(elss => {
      let {songName} = elss;
      title.innerHTML = songName;
      download_music.setAttribute('download', songName);
    });
  
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';
  
    makeAllplays();
  
    el.target.classList.add('fa-circle-pause');
    el.target.classList.remove('fa-circle-play');
    wave.classList.add('active1');
   
  }
  
  music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;
  
    switch (b) {
      case 'next':
        next_music();
        break;
    
        case 'repeat':
          repeat_music();
          break;
    
           case 'random':
           random_music();
           break;
  
  }
  });
  
  
  
  
  
  
  
  
  
  