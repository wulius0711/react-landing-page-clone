import React from 'react';
import stylesSubnavi from './SubNavi.module.scss';

function SubNavi() {
  return (
    <section className={stylesSubnavi.subNavi}>
      <div className={stylesSubnavi.subNaviSticky}>
        <div className={stylesSubnavi.containerSubNavi}>
          <div className={stylesSubnavi.subNaviStickyList}>
            <div className={stylesSubnavi.subNaviStickyListLeft}>
              <div className={stylesSubnavi.subNaviStickyListLeftItem}>
                Find Mentors
              </div>
              <div className={stylesSubnavi.subNaviStickyListLeftItem}>
                Growth Stories
              </div>
              <div className={stylesSubnavi.subNaviStickyListLeftItem}>
                Compare Us
              </div>
              <div className={stylesSubnavi.subNaviStickyListLeftItem}>
                Teams
              </div>
              <div className={stylesSubnavi.subNaviStickyListLeftItem}>
                Pricing
              </div>
            </div>
            <div className={stylesSubnavi.subNaviStickyListRight}>
              <button>Click</button>
            </div>
          </div>
        </div>
      </div>

      <div className={stylesSubnavi.subNaviStickyContent}>
        <div>
          <h2>Garfield, the cat</h2>
          Garfield wurde am 19. Juni 1978 in der Küche von Mamma Leonis
          italienischrestaurant als Sohn seiner Mutter und seines namenlosen
          Vaters geboren und wog bei der Geburt 5 Pfund und 6 Unzen. Er liebt
          Lasagne seit dem Tag seiner Geburt, und es ist seit jeher sein
          Lieblingsessen, im Gegensatz zum Großteil seiner Familie, sogar seinen
          Eltern, die Nagetiere waren, die "Mauser" jagten. Der
          Restaurantbesitzer von Mamma Leoni's Italienisch Restaurant musste
          sich entscheiden, ob er Garfield behalten oder sein Restaurant wegen
          Pastamangels schließen möchte, also wurde Garfield an eine Zoohandlung
          verkauft.
        </div>
        <div>
          Am selben Tag wie seine Geburt, Jon Arbuckle kam in die Zoohandlung
          und musste sich zwischen Garfield, einem Leguan und einem
          Haustierfelsen entscheiden. Am 14. November 1978 zitierte der
          Comic-Strip Jon: "Ich liebe Katzen. Ich wollte eine Katze... Also was
          soll ich tun? Ich gehe in die Zoohandlung und frage nach einer Katze.
          Was geben sie mir?... . Eine Lasagne mit Fell und Reißzähnen.“
        </div>
        <div className={stylesSubnavi.subNaviStickyContentLast}>
          Mister Sandmann schickt drei Schafe los, um Garfield zum Einschlafen
          zu bringen. Doch da unser fülliger Freund zuvor 93 Tassen Kaffee
          getrunken hat, will es den drei Tieren einfach nicht gelingen, ihn ins
          Land der Träume zu schicken. Mister Sandmann ist darüber so sauer,
          dass er die Schafe feuert. Um ihrem Boss zu beweisen, dass sie es
          können, versetzen sie den ganzen Rest der Stadt in den Schlaf. Das ist
          gar nicht im Sinne von Mister Sandmann.
        </div>
      </div>
    </section>
  );
}

export default SubNavi;
