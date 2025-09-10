$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Moonbeam Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["BeamSwap           ", `<a href='beamswap'       >Various</a>`,"GLINT          ","https://beamswap.io"],
      ["Solarflare         ", `<a href='solarflare'     >Various</a>`,"FLARE          ","https://app.solarflare.io"],
      ["Galaxy             ", `<a href='galaxy'         >Various</a>`,"GSHARE / GLX   ","https://www.galaxyfinance.finance"],
      ["Zenlink            ", `<a href='zenlink'        >Various</a>`,"Various        ","https://dex.zenlink.pro"],
      ["Moonbeam Cougar    ", `<a href='cougar'         >Various</a>`,"CGS            ","https://moonbeam.cougarswap.io"],
      ["1Beam              ", `<a href='1beam'          >Various</a>`,"1BEAM          ","https://1beam.io"],
      ["Monox Finance      ", `<a href='monox'          >Various</a>`,"vUNIT          ","https://monox.finance"],
      ["WePiggy            ", `<a href="wepiggy"        >Various</a>`,"WPC            ","https://app.wepiggy.com"],
      ["StellaSwap         ", `<a href='stellaswap'     >Various</a>`,"STELLA         ","https://stellaswap.com"],
      ['Sickle             ', `<a href='sickle'         >Various</a>`, '              ', '']
    ].reverse()
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
