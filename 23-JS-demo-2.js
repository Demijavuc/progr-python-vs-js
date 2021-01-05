function sveiciens(vards) {
	console.log(`Labdien, ${vards} !`)
    // šis -> ` nav apostrofs, bet gan zīme, kuru atradīsi klaviatūras augšējā kreisajā stūrī. To sauc par tildes taustiņu.	
}


function taisnsturaLaukums(mala1, mala2) {
   if (mala1 > 0 && mala2 > 0) {
       return mala1 * mala2;
   }
   return 0;
}


function pirkumaSumma(cena) {
	let jamaksa = cena;
	if (cena>100) {
		jamaksa = cena*0.95;
	}
	else if (cena>50) {
		jamaksa = cena*0.93;
	}
    console.log(`Par pirkumu jāmaksā ${jamaksa}`);		
}

// sveiciens("10.a klase");

// console.log(taisnsturaLaukums(2, 3));
// console.log(taisnsturaLaukums(-6, 7));

// pirkumaSumma(101);

