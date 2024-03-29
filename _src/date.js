/*!
 * Copyright (c) 2024 Mohan Khadka
 * Licensed under the MIT License (MIT)
 * https://mohankhadka.com.np/
 */
export class NepaliCalendar {
	constructor() {
		// Example usage:
		//const cal = new NepaliCalendar();
		//console.log(cal.getNepDate('2024','01','14'));
		//console.log(cal.getEngDate('2080','09','29'));
		this.nepaliYears = {
			1975: [31,32,31,32,31,30,30,30,29,30,29,31],
			1976: [31,32,31,32,31,30,30,30,29,29,30,30],
			1977: [31,31,32,31,31,31,30,29,30,29,30,30],
			1978: [31,31,31,32,31,31,30,29,30,29,30,30],
			1979: [31,32,31,32,31,30,30,30,29,30,29,31],
			1980: [31,32,31,32,31,30,30,29,30,29,30,30],
			1981: [31,31,32,31,31,31,30,29,30,29,30,30],
			1982: [31,31,31,32,31,31,29,30,30,29,30,30],
			1983: [31,32,31,32,31,30,30,30,29,29,30,31],
			1984: [31,31,32,32,31,30,30,29,30,29,30,30],
			1985: [31,31,32,31,31,31,30,29,30,29,30,30],
			1986: [31,31,31,32,31,31,29,30,30,29,30,30],
			1987: [31,32,31,32,31,30,30,30,29,29,30,31],
			1988: [31,31,32,32,31,30,30,29,30,29,30,30],
			1989: [31,31,32,31,31,31,30,29,30,29,30,30],
			1990: [31,31,31,32,31,31,29,30,30,29,29,31],
			1991: [31,32,31,32,31,30,30,30,29,29,30,31],
			1992: [31,31,32,32,31,30,30,29,30,29,30,30],
			1993: [31,31,32,31,31,31,30,29,30,29,30,30],
			1994: [30,32,31,32,31,30,30,30,29,30,29,31],
			1995: [31,32,31,32,31,30,30,30,29,29,30,31],
			1996: [31,31,32,32,31,30,29,30,30,29,30,30],
			1997: [31,31,32,31,31,31,30,29,30,29,30,30],
			1998: [30,32,31,32,31,30,30,30,29,30,29,31],
			1999: [31,32,31,32,31,30,30,30,29,29,30,31],
			2000: [30,32,31,32,31,30,30,30,29,30,29,31],
			2001: [31,31,32,31,31,31,30,29,30,29,30,30],
			2002: [31,31,32,32,31,30,30,29,30,29,30,30],
			2003: [31,32,31,32,31,30,30,30,29,29,30,31],
			2004: [30,32,31,32,31,30,30,30,29,30,29,31],
			2005: [31,31,32,31,31,31,30,29,30,29,30,30],
			2006: [31,31,32,32,31,30,30,29,30,29,30,30],
			2007: [31,32,31,32,31,30,30,30,29,29,30,31],
			2008: [31,31,31,32,31,31,29,30,30,29,29,31],
			2009: [31,31,32,31,31,31,30,29,30,29,30,30],
			2010: [31,31,32,32,31,30,30,29,30,29,30,30],
			2011: [31,32,31,32,31,30,30,30,29,29,30,31],
			2012: [31,31,31,32,31,31,29,30,30,29,30,30],
			2013: [31,31,32,31,31,31,30,29,30,29,30,30],
			2014: [31,31,32,32,31,30,30,29,30,29,30,30],
			2015: [31,32,31,32,31,30,30,30,29,29,30,31],
			2016: [31,31,31,32,31,31,29,30,30,29,30,30],
			2017: [31,31,32,31,31,31,30,29,30,29,30,30],
			2018: [31,32,31,32,31,30,30,29,30,29,30,30],
			2019: [31,32,31,32,31,30,30,30,29,30,29,31],
			2020: [31,31,31,32,31,31,30,29,30,29,30,30],
			2021: [31,31,32,31,31,31,30,29,30,29,30,30],
			2022: [31,32,31,32,31,30,30,30,29,29,30,30],
			2023: [31,32,31,32,31,30,30,30,29,30,29,31],
			2024: [31,31,31,32,31,31,30,29,30,29,30,30],
			2025: [31,31,32,31,31,31,30,29,30,29,30,30],
			2026: [31,32,31,32,31,30,30,30,29,29,30,31],
			2027: [30,32,31,32,31,30,30,30,29,30,29,31],
			2028: [31,31,32,31,31,31,30,29,30,29,30,30],
			2029: [31,31,32,31,32,30,30,29,30,29,30,30],
			2030: [31,32,31,32,31,30,30,30,29,29,30,31],
			2031: [30,32,31,32,31,30,30,30,29,30,29,31],
			2032: [31,31,32,31,31,31,30,29,30,29,30,30],
			2033: [31,31,32,32,31,30,30,29,30,29,30,30],
			2034: [31,32,31,32,31,30,30,30,29,29,30,31],
			2035: [30,32,31,32,31,31,29,30,30,29,29,31],
			2036: [31,31,32,31,31,31,30,29,30,29,30,30],
			2037: [31,31,32,32,31,30,30,29,30,29,30,30],
			2038: [31,32,31,32,31,30,30,30,29,29,30,31],
			2039: [31,31,31,32,31,31,29,30,30,29,30,30],
			2040: [31,31,32,31,31,31,30,29,30,29,30,30],
			2041: [31,31,32,32,31,30,30,29,30,29,30,30],
			2042: [31,32,31,32,31,30,30,30,29,29,30,31],
			2043: [31,31,31,32,31,31,29,30,30,29,30,30],
			2044: [31,31,32,31,31,31,30,29,30,29,30,30],
			2045: [31,32,31,32,31,30,30,29,30,29,30,30],
			2046: [31,32,31,32,31,30,30,30,29,29,30,31],
			2047: [31,31,31,32,31,31,30,29,30,29,30,30],
			2048: [31,31,32,31,31,31,30,29,30,29,30,30],
			2049: [31,32,31,32,31,30,30,30,29,29,30,30],
			2050: [31,32,31,32,31,30,30,30,29,30,29,31],
			2051: [31,31,31,32,31,31,30,29,30,29,30,30],
			2052: [31,31,32,31,31,31,30,29,30,29,30,30],
			2053: [31,32,31,32,31,30,30,30,29,29,30,30],
			2054: [31,32,31,32,31,30,30,30,29,30,29,31],
			2055: [31,31,32,31,31,31,30,29,30,29,30,30],
			2056: [31,31,32,31,32,30,30,29,30,29,30,30],
			2057: [31,32,31,32,31,30,30,30,29,29,30,31],
			2058: [30,32,31,32,31,30,30,30,29,30,29,31],
			2059: [31,31,32,31,31,31,30,29,30,29,30,30],
			2060: [31,31,32,32,31,30,30,29,30,29,30,30],
			2061: [31,32,31,32,31,30,30,30,29,29,30,31],
			2062: [30,32,31,32,31,31,29,30,29,30,29,31],
			2063: [31,31,32,31,31,31,30,29,30,29,30,30],
			2064: [31,31,32,32,31,30,30,29,30,29,30,30],
			2065: [31,32,31,32,31,30,30,30,29,29,30,31],
			2066: [31,31,31,32,31,31,29,30,30,29,29,31],
			2067: [31,31,32,31,31,31,30,29,30,29,30,30],
			2068: [31,31,32,32,31,30,30,29,30,29,30,30],
			2069: [31,32,31,32,31,30,30,30,29,29,30,31],
			2070: [31,31,31,32,31,31,29,30,30,29,30,30],
			2071: [31,31,32,31,31,31,30,29,30,29,30,30],
			2072: [31,32,31,32,31,30,30,29,30,29,30,30],
			2073: [31,32,31,32,31,30,30,30,29,29,30,31],
			2074: [31,31,31,32,31,31,30,29,30,29,30,30],
			2075: [31,31,32,31,31,31,30,29,30,29,30,30],
			2076: [31,32,31,32,31,30,30,30,29,29,30,30],
			2077: [31,32,31,32,31,30,30,30,29,30,29,31],
			2078: [31,31,31,32,31,31,30,29,30,29,30,30],
			2079: [31,31,32,31,31,31,30,29,30,29,30,30],
			2080: [31,32,31,32,31,30,30,30,29,29,30,30],
			2081: [31,31,32,32,31,30,30,30,29,30,30,30],
			2082: [30,32,31,32,31,30,30,30,29,30,30,30],
			2083: [31,31,32,31,31,30,30,30,29,30,30,30],
			2084: [31,31,32,31,31,30,30,30,29,30,30,30],
			2085: [31,32,31,32,30,31,30,30,29,30,30,30],
			2086: [30,32,31,32,31,30,30,30,29,30,30,30],
			2087: [31,31,32,31,31,31,30,30,29,30,30,30],
			2088: [30,31,32,32,30,31,30,30,29,30,30,30],
			2089: [30,32,31,32,31,30,30,30,29,30,30,30],
			2090: [30,32,31,32,31,30,30,30,29,30,30,30],
			2091: [31,31,32,32,31,30,30,29,30,29,30,30],
			2092: [30,31,32,32,31,30,30,30,29,30,30,30],
			2093: [30,32,31,32,31,30,30,30,29,29,30,30],
			2094: [31,31,32,31,31,30,30,30,29,30,30,30],
			2095: [31,31,32,31,31,31,30,29,30,30,30,30],
			2096: [31,32,31,32,31,30,30,30,29,29,30,31],
			2097: [31,31,31,32,30,31,29,30,30,29,30,30],
			2098: [31,31,32,31,31,31,30,29,30,29,30,30],
			2099: [31,31,32,32,31,30,30,29,30,29,30,30],
			2100: [31,32,31,32,31,30,30,30,29,29,30,31],
			2101: [31,31,31,32,31,31,29,30,30,29,30,30],
			2102: [31,31,32,31,31,31,30,29,30,29,30,30],
			2103: [31,32,31,32,31,30,30,29,30,29,30,30],
			2104: [31,32,31,32,31,30,30,30,29,30,29,31],
			2105: [31,31,31,32,31,31,30,29,30,29,30,30],
			2106: [31,31,32,31,31,31,30,29,30,29,30,30],
			2107: [31,32,31,32,31,30,30,30,29,29,30,30],
			2108: [31,32,31,32,31,30,30,30,29,30,29,31],
			2109: [31,31,31,32,31,31,30,29,30,29,30,30],
			2110: [31,31,32,31,31,31,30,29,30,29,30,30],
			2111: [31,32,31,32,31,30,30,30,29,29,30,30],
			2112: [31,32,31,32,31,30,30,30,29,30,29,31],
			2113: [31,31,32,31,31,31,30,29,30,29,30,30],
			2114: [31,31,32,31,32,30,30,29,30,29,30,30],
			2115: [31,32,31,32,31,30,30,30,29,29,30,31],
			2116: [30,32,31,32,31,30,30,30,29,30,29,31],
			2117: [31,31,32,31,31,31,30,29,30,29,30,30],
			2118: [31,31,32,32,31,30,30,29,30,29,30,30],
			2119: [31,32,31,32,31,30,30,30,29,29,30,31],
			2120: [30,32,31,32,31,31,29,30,30,29,29,31],
			2121: [31,31,32,31,31,31,30,29,30,29,30,30],
			2122: [31,31,32,32,31,30,30,29,30,29,30,30],
			2123: [31,32,31,32,31,30,30,30,29,29,30,31],
			2124: [31,31,31,32,31,31,29,30,30,29,30,30],
			2125: [31,31,32,31,31,31,30,29,30,29,30,30],
			2126: [31,31,32,32,31,30,30,29,30,29,30,30],
			2127: [31,32,31,32,31,30,30,30,29,29,30,31],
			2128: [31,31,31,32,31,31,29,30,30,29,30,30],
			2129: [31,31,32,31,31,31,30,29,30,29,30,30],
			2130: [31,32,31,32,31,30,30,29,30,29,30,30],
			2131: [31,32,31,32,31,30,30,30,29,29,30,31],
			2132: [31,31,31,32,31,31,30,29,30,29,30,30],
			2133: [31,31,32,31,31,31,30,29,30,29,30,30],
			2134: [31,32,31,32,31,30,30,30,29,29,30,30],
			2135: [31,32,31,32,31,30,30,30,29,30,29,31],
			2136: [31,31,31,32,31,31,30,29,30,29,30,30],
			2137: [31,31,32,31,31,31,30,29,30,29,30,30],
			2138: [31,32,31,32,31,30,30,30,29,29,30,30],
			2139: [31,32,31,32,31,30,30,30,29,30,29,31],
			2140: [31,31,32,31,31,31,30,29,30,29,30,30],
			2141: [31,31,32,31,32,30,30,29,30,29,30,30],
			2142: [31,32,31,32,31,30,30,30,29,29,30,31],
			2143: [30,32,31,32,31,30,30,30,29,30,29,31],
			2144: [31,31,32,31,31,31,30,29,30,29,30,30],
			2145: [31,31,32,32,31,30,30,29,30,29,30,30],
			2146: [31,32,31,32,31,30,30,30,29,29,30,31],
			2147: [30,32,31,32,31,30,30,30,29,30,29,31],
			2148: [31,31,32,31,31,31,30,29,30,29,30,30],
			2149: [31,31,32,32,31,30,30,29,30,29,30,30],
			2150: [31,32,31,32,31,30,30,30,29,29,30,31],
			2151: [31,31,31,32,31,31,29,30,30,29,29,31],
			2152: [31,31,32,31,31,31,30,29,30,29,30,30],
			2153: [31,31,32,32,31,30,30,29,30,29,30,30],
			2154: [31,32,31,32,31,30,30,30,29,29,30,31],
			2155: [31,31,31,32,31,31,29,30,30,29,30,30],
			2156: [31,31,32,31,31,31,30,29,30,29,30,30],
			2157: [31,32,31,32,31,30,30,29,30,29,30,30],
			2158: [31,32,31,32,31,30,30,30,29,29,30,31],
			2159: [31,31,31,32,31,31,30,29,30,29,30,30],
			2160: [31,31,32,31,31,31,30,29,30,29,30,30],
			2161: [31,32,31,32,31,30,30,30,29,29,30,30],
			2162: [31,32,31,32,31,30,30,30,29,30,29,31],
			2163: [31,31,31,32,31,31,30,29,30,29,30,30],
			2164: [31,31,32,31,31,31,30,29,30,29,30,30],
			2165: [31,32,31,32,31,30,30,30,29,29,30,30],
			2166: [31,32,31,32,31,30,30,30,29,30,29,31],
			2167: [31,31,31,32,31,31,30,29,30,29,30,30],
			2168: [31,31,32,31,31,31,30,29,30,29,30,30],
			2169: [31,32,31,32,31,30,30,30,29,29,30,31],
			2170: [30,32,31,32,31,30,30,30,29,30,29,31],
			2171: [31,31,32,31,31,31,30,29,30,29,30,30],
			2172: [31,31,32,31,32,30,30,29,30,29,30,30],
			2173: [31,32,31,32,31,30,30,30,29,29,30,31],
			2174: [30,32,31,32,31,30,30,30,29,30,29,31],
			2175: [31,31,32,31,31,31,30,29,30,29,30,30],
			2176: [31,31,32,32,31,30,30,29,30,29,30,30],
			2177: [31,32,31,32,31,30,30,30,29,29,30,31],
			2178: [30,32,31,32,31,31,29,30,30,29,29,31],
			2179: [31,31,32,31,31,31,30,29,30,29,30,30],
			2180: [31,31,32,32,31,30,30,29,30,29,30,30],
			2181: [31,32,31,32,31,30,30,30,29,29,30,31],
			2182: [31,31,31,32,31,31,29,30,30,29,30,30],
			2183: [31,31,32,31,31,31,30,29,30,29,30,30],
			2184: [31,31,32,32,31,30,30,29,30,29,30,30],
			2185: [31,32,31,32,31,30,30,30,29,29,30,31],
			2186: [31,31,31,32,31,31,29,30,30,29,30,30],
			2187: [31,31,32,31,31,31,30,29,30,29,30,30],
			2188: [31,32,31,32,31,30,30,29,30,29,30,30],
			2189: [31,32,31,32,31,30,30,30,29,29,30,31],
			2190: [31,31,31,32,31,31,30,29,30,29,30,30],
			2191: [31,31,32,31,31,31,30,29,30,29,30,30],
			2192: [31,32,31,32,31,30,30,30,29,29,30,30],
			2193: [31,32,31,32,31,30,30,30,29,30,29,31],
			2194: [31,31,31,32,31,31,30,29,30,29,30,30],
			2195: [31,31,32,31,31,31,30,29,30,29,30,30],
			2196: [31,32,31,32,31,30,30,30,29,29,30,30],
			2197: [31,32,31,32,31,30,30,30,29,30,29,31],
			2198: [31,31,32,31,31,31,30,29,30,29,30,30],
			2199: [31,31,32,31,32,30,30,29,30,29,30,30]
			// OH GOD! I am tired.
		};
		this.firstDayEn ="1918-04-13";
		this.startNe = "1975";
		this.startEn = "1918";
		this.endNe = "2095";
		this.endEn = "2038";
		this.monthNe = ['बैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'असोज', 'कार्तिक', 'मङ्सिर', 'पुस', 'माघ', 'फाल्गुण', 'चैत'];
		this.dayNe = ['आईतबार', 'सोमबार', 'मङ्गलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिवार'];
		this.monthEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		this.dayEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	}
	getTextNe(text, type='dg') {
		if(text || text===0){
			switch(type){
				case'mm':
					return this.monthNe[text];
				break;
				case'dd':
					return this.dayNe[text];
				break;
				case'dg':
					return this.getNumbNe(text);
				break;
			}
		}else{
			return '';
		}
	}
	getNumbNe(input, reverse=false) {
		const standardNumsets = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		const devanagariNumsets = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
		if (reverse) {
			return input.replace(new RegExp(devanagariNumsets.join('|'), 'g'), (match) => devanagariNumsets.indexOf(match));
		}
		return input.replace(new RegExp(standardNumsets.join('|'), 'g'), (match) => devanagariNumsets[standardNumsets.indexOf(match)]);
	}

	GregorianToJD(year, month, day) {
		const a = Math.floor((14 - month) / 12);
		const y = year + 4800 - a;
		const m = month + 12 * a - 3;
		const jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
		return jd;
	}
	JDDayOfWeek(jd, mode) {
		// Mode 0: Returns 0 for Monday through 6 for Sunday
		// Mode 1: Returns 1 for Monday through 7 for Sunday
		const days = [1, 2, 3, 4, 5, 6, 0];

		const dayIndex = jd % 7;

		if (mode === 0) {
			return days[dayIndex];
		} else if (mode === 1) {
			return days[dayIndex] + 1;
		} else {
			throw new Error("Invalid mode. Use 0 for mode 0 or 1 for mode 1.");
		}
	}
	getWeekNe(year, month, day) {
		const jd = this.GregorianToJD(parseInt(year), parseInt(month), parseInt(day));
		const dayOfWeek = this.JDDayOfWeek(jd, 0);
		return this.dayNe[dayOfWeek];
	}

	validateNe(year, month, day) {
		if (!this.nepaliYears.hasOwnProperty(year)) {
			return 'Invalid <b>year</b> range';
		}

		if (month > 12 || month < 1) {
			return 'Invalid <b>month</b> range';
		}

		if (day > this.nepaliYears[year][month - 1] || day < 1) {
			return 'Invalid <b>day</b> range';
		}

		return true;
	}

	validateEn(year, month, day) {
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();

		if (year < this.startEn || year > currentYear || year > this.endEn) {
			return 'Invalid <b>year</b> range';
		}

		if (month < 1 || month > 12) {
			return 'Invalid <b>month</b> range';
		}

		const lastDayOfMonth = new Date(year, month, 0).getDate();

		if (day < 1 || day > lastDayOfMonth) {
			return 'Invalid <b>day</b> range';
		}

		return true;
	}

	//AD to BS
	getNepDate(year, month, day, msg) {
		const validate = this.validateEn(year, month, day);
		if (validate !== true) {
			msg(validate);
			return false;
		}
		const date = new Date(`${year}-${month}-${day}`);
		const dayname = this.getWeekNe(parseInt(year), parseInt(month), parseInt(day));
		const date_start = new Date(this.firstDayEn);
		const diff = Math.floor((date - date_start) / (1000 * 60 * 60 * 24));

		let totalDays = 0;
		let found = false;
		let dayss;

		for (let i = this.startNe; i < this.endNe; i++) {
			for (let j = 0; j < 12; j++) {
				totalDays += this.nepaliYears[i][j];

				if (totalDays > diff) {
					year = i;
					month = j + 1;
					const daysss = totalDays - diff;
					dayss = this.nepaliYears[i][j] - daysss + 1;
					found = true;
					break;
				}
			}

			if (found) {
				break;
			}
		}

		const dateResult = {
			y: this.getNumbNe(year.toString()),
			m: this.getNumbNe(month.toString()),
			M: this.monthNe[month - 1],
			d: this.getNumbNe(dayss.toString()),
			l: dayname,
			string: {
				yyyy: year.toString(),
				mm: month.toString().padStart(2,'0'),
				dd: dayss.toString().padStart(2,'0'),
			}
		};

		return dateResult;
	}

	// BS to AD
	getEngDate(year, month, day, msg) {
		const validate = this.validateNe(year, month, day);
		if (validate !== true) {
			msg(validate);
			return false;
		}

		const dateStart = new Date(this.firstDayEn);
		let dayCount = 0;
		const months = month - 1;

		for (let i = this.startNe; i < year; i++) {
			dayCount += this.nepaliYears[i].reduce((acc, curr) => acc + curr, 0);
		}

		for (let j = 0; j < months; j++) {
			dayCount += this.nepaliYears[year][j];
		}

		dayCount += day - 1;

		const eng = new Date(dateStart.getTime() + dayCount * 24 * 60 * 60 * 1000);

		const date = {
			y: eng.getFullYear(),
			m: eng.getMonth() + 1,
			M: this.monthEn[eng.getMonth()],
			d: eng.getDate(),
			l: this.dayEn[eng.getDay()],
			string: {
				yyyy: eng.getFullYear().toString(),
				mm: (eng.getMonth() + 1).toString().padStart(2,'0'),
				dd: eng.getDate().toString().padStart(2,'0'),
			}
		};

		return date;
	}

}
window.cal = new NepaliCalendar();