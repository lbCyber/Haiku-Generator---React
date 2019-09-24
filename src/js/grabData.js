const GrabData = {
  hyperlink: window.location.href.split('?')[0],
  searchParams: atob(escape(decodeURIComponent(window.location.search.replace(/['?']/, '')))).split('&'),
  paramString: '',
  catcher: [],
  GrabData: {},
  urlGen: [], // Global to record result as search parameters
  paramGen: () => {
    return (window.btoa(unescape(encodeURIComponent(GrabData.urlGen.join('&')))));
  },
  grabber: (data, line, syllables) => {
    const getTarget = (s) => {
      if (s === 5) {
        return (data.fiveSyb)
      } else if (s === 7) {
        return (data.sevenSyb)
      } else {
        return null
      }
    }
    let randomLine = Math.floor(Math.random() * getTarget(syllables).length);
    let randomVid;
    let pickText = line - 1;
    let pickVid = line + 2;

    const pickRandomVid = () => {
      randomVid = Math.floor(Math.random() * data.bgs.length);
      if (randomVid >= 13 || randomVid < 0) {
        randomVid = 0
      }

      const catchDupes = () => {
        return GrabData.catcher.includes(randomVid);
      }
      if (catchDupes()) {
        pickRandomVid();
      } else {
        GrabData.catcher[line] = randomVid;
      }
    };
    if (GrabData.searchParams.length >= 6) {
      const checkVal = (v, t) => {
        if (v !== "") {
          return v
        } else {
          if (t === 0) {
            return randomLine;
          } else {
            return randomVid;
          }
        }
      }
      randomLine = checkVal(GrabData.searchParams[pickText], 0);
      randomVid = checkVal(GrabData.searchParams[pickVid], 1);
    } else {
      pickRandomVid();
    }
    let haikuLine = getTarget(syllables)[randomLine];
    if (haikuLine === undefined) {
      haikuLine = getTarget(syllables)[1]
    } else if (haikuLine.includes('godzilla')) {
      randomVid = 'g';
    }
    return {'text': randomLine, 'bg': randomVid}
  }
}

export default GrabData;