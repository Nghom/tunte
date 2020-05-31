let j, y = 0;
let test = 'f';
let i = 0;

const number = {
    convert: function (n) {

        let word;

        if (!Number.isInteger(n)) {
            throw ("Sorry the argument of this function should be an integer");
        }

        if (n > Math.pow(10, 20)) {
            throw ("Sorry no number greater than 19 figures");
        } else {
            word = this.modTest(n);
        }

        return word;
    },
    modTest: function (y) {
        let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let count = 1, ex = 20, i = 0;
        let abc = 0;

        do {
            if (y < Math.pow(10, ex)) {
                if (test === 't') {
                    if (y === 0) {
                        for (j = 0; j <= ex; j++)
                            a[j + i] = 0;
                        count++;
                    } else {
                        a[i] = 0;
                        i++;
                        count++;
                    }
                }
                ex--;
            } else {

                if (abc === 0) {
                    let floor = ex;
                }
                count++;
                a[i] = parseInt(y / Math.pow(10, ex));
                y %= Math.pow(10, ex);
                test = 't';
                i++;
                ex--;
                abc++;
            }
            if (y < 10 && ex === 0) {
                if (y === 0) {
                    for (j = 0; j < ex; j++) {
                        a[j + i] = 0;
                        count++;
                    }
                } else
                    a[i] = y;
            }
        } while (y > 10 || ex !== 0);
        let b = [];

        for (let i = 0; i < count; i++) {
            b[i] = a[i];
        }

        let ans;
        switch (count) {
            case 1:
                ans = this.unit(b);
                break;
            case 2:
                ans = this.tens(b);
                break;
            case 3:
                ans = this.HF(b);
                break;
            case 4:
                ans = this.split(b, 1, 1);
                break;
            case 5:
                ans = this.split(b, 2, 1);
                break;
            case 6:
                ans = this.split(b, 0, 2);
                break;
            case 7:
                ans = this.split(b, 1, 2);
                break;
            case 8:
                ans = this.split(b, 2, 2);
                break;
            case 9:
                ans = this.split(b, 0, 3);
                break;
            case 10:
                ans = this.split(b, 1, 3);
                break;
            case 11:
                ans = this.split(b, 2, 3);
                break;
            case 12:
                ans = this.split(b, 0, 4);
                break;
            case 13:
                ans = this.split(b, 1, 4);
                break;
            case 14:
                ans = this.split(b, 2, 4);
                break;
            case 15:
                ans = this.split(b, 0, 5);
                break;
            case 16:
                ans = this.split(b, 1, 5);
                break;
            case 17:
                ans = this.split(b, 2, 5);
                break;
            case 18:
                ans = this.split(b, 0, 6);
                break;
            case 19:
                ans = this.split(b, 1, 6);
                break;
            default:
                throw ("Max number of figures exceeded");
        }

        ans = this.clean(ans);

        return ans;

    },
    clean: function (strng) {

        let ans1;

        ans1 = strng.replace("ncaʼNcʉ̀ʼ", "ncaʼ");
        ans1 = ans1.replace("ncòbNtogə", "ncòbntôg");
        ans1 = ans1.replace("ncuʼNcʉ̀ʼ", "ncuʼ");
        ans1 = ans1.replace("mɑ̂ncuʼNcʉ̀ʼ", "mɑ̂ncuʼ");
        ans1 = ans1.replace("mɑmɑ̂ncuʼNcʉ̀ʼ", "mɑmɑ̂ncuʼ");
        ans1 = ans1.replace("ncòbFomə", "ncòbfôm");
        ans1 = ans1.replace(/ncòbBwə̀ʼə/g, "ncòbBwə̀ʼə̂");
        ans1 = ans1.replace("  ", " ");

        ans1 = ans1.toLowerCase();

        return ans1;
    },
    split: function (number, mod3, div3) {

        let a = new Array(4);
        for (i = 0; i < 4; i++)
            a[i] = new Array(3);


        /*cooked*/
        if (mod3 === 1) {

            let n = number[0]; // for the unit() function.

            let ans1, ans2 = "";
            ans1 = this.unit(n);

            let index = 1;
            for (var ii = 0; ii < div3; ii++) {
                let u = 0;

                for (let i = index; i < index + 3; i++) {
                    a[ii][u] = number[i];
                    ++u;
                }
                index += 3;
            }

            let p = ii - 1;
            for (let i = 0; i < ii; i++) {
                let b = [];
                for (let y = 0; y < 3; y++) {
                    b[y] = a[p][y];
                }
                --p;

                ans2 = this.HI(ans2, b, i);
            }

            return ans2 + ans1;
        }

        else if (mod3 === 2) {

            let ap = new Array(2);
            for (let yu = 0; yu < 2; yu++) { // for the tens() function.
                ap[yu] = number[yu];
            }
            let ans2 = " ", ans1 = this.tens(ap);

            let index = 2;
            for (let ii = 0; ii < div3; ii++) {
                let u = 0;

                for (let i = index; i < index + 3; i++) {
                    a[ii][u] = number[i];
                    ++u;
                }
                index += 3;
            }


            let p = ii - 1;
            for (let i = 0; i < ii; i++) {
                let b = [];
                for (let y = 0; y < 3; y++) {
                    b[y] = a[p][y];
                }
                --p;
                ans2 = this.HI(ans2, b, i);


            }
            return ans2 + "" + ans1;
        } else {

            let ap = new Array(3);
            for (let yu = 0; yu < 3; yu++) {  //to be sent to HF() function.
                ap[yu] = number[yu];
            }

            let ans1 = this.HF(ap);
            let ans2 = " ";

            let index = 3;
            for (var ii = 0; ii < div3 - 1; ii++) {
                let u = 0;

                for (let i = index; i < index + 3; i++) {
                    a[ii][u] = number[i];

                    ++u;
                }
                index += 3;
            }


            let p = ii - 1;

            for (let i = 0; i < ii; i++) {
                let b = [];
                for (let y = 0; y < 3; y++) {
                    b[y] = a[p][y];
                }
                --p;
                ans2 = this.HI(ans2, b, i);


            }

            return ans2 + "" + ans1;
        }

    },
    unit: function (a) {
        return a === 0 ? "Bɑ̌nbɑn" : a === 1
            ? "Ncʉ̀ʼ" : a === 2 ? "Bɑhɑ" : a === 3
                ? "Tad" : a === 4 ? "Kuɑ̀" : a === 5
                    ? "Tɑn" : a === 6 ? "Ntogə" : a === 7
                        ? "Sɑ̀mmbɑhɑ" : a === 8 ? "Fomə" : a === 9
                            ? "Bwə̀ʼə" : "hahaha";
    },
    tens: function (ab) {
        let answ = "";
        let un = this.unit(ab[0]), deux = this.unit(ab[1]);

        if (ab[0] === 1 && ab[1] === 0) {
            answ = "Gham";
        } else if (ab[0] === 1 && ab[1] !== 0) {
            answ = "Ncòb" + deux + " gham";
        } else if (ab[0] !== 1 && ab[1] === 0 && ab[0] < 6 && ab[0] !== 4) {
            answ = "Ŋam" + un;
        } else if (ab[0] !== 1 && ab[1] === 0 && (ab[0] > 5 || ab[0] === 4)) {
            answ = "Ŋâm" + un;
        } else {
            if (ab[0] > 5 || ab[0] === 4)
                answ = "Ncòb" + deux + " Ŋâm" + un;
            else {
                answ = "Ncòb" + deux + " Ŋam" + un;
            }
        }
        return answ;
    },
    HF: function (num) {
        let ans;

        if (num[1] === 0 && num[2] === 0) {

            if (num[0] === 1) {
                ans = "nkʉ";
            } else {
                ans = "nkʉ" + this.unit(num[0]);
            }

        } else if (num[1] === 0 && num[2] !== 0) {

            if (num[0] === 1) {
                ans = this.unit(num[2]) + "tû nkʉ ";
            } else {
                ans = this.unit(num[2]) + "tû nkʉ" + this.unit(num[0]);
            }

        } else if (num[1] === 1 && num[2] === 0) {

            if (num[0] === 1) {
                ans = "mɛnmbʉ̂m  nkʉ";
            } else {
                ans = "mɛnmbʉ̂m  nkʉ" + this.unit(num[0]);
            }

        } else if (num[1] === 1 && num[2] !== 0) {

            if (num[0] === 1) {
                ans = "ncòb" + this.unit(num[2]) + "  mɛnmbʉ̂m nkʉ ";
            } else {
                ans = "ncòb" + this.unit(num[2]) + "  mɛnmbʉ̂m nkʉ" + this.unit(num[0]);
            }

        } else if (num[1] !== 0 && num[1] !== 1 && num[2] === 0) {

            if (num[0] === 1) {
                ans = "bon" + this.unit(num[1]) + "  nkʉ ";
            } else {
                ans = "bon" + this.unit(num[1]) + "  nkʉ" + this.unit(num[0]);
            }

        } else if (num[1] !== 0 && num[1] !== 1 && num[2] !== 0) {

            if (num[0] === 1) {
                ans = "ncòb" + this.unit(num[2]) + "  bon" + this.unit(num[1]) + "  nkʉ ";
            } else {
                ans = "ncòb" + this.unit(num[2]) + "  bon" + this.unit(num[1]) + "  nkʉ" + this.unit(num[0]);
            }

        }

        return ans;
    },
    /**
     * @return {string}
     */
    HI: function (string, num, position) {

        let trans = [" ", " nca'", " ncuʼ", " mɑ̂ncuʼ", " ncaʼmɑ̂ncuʼ", " ncûʼmɑ̂ncuʼ", " mɑmɑ̂ncuʼ"];

        let ans = "";

        if (num[0] !== 0 && num[1] === 0 && num[2] === 0) {

            if (num[0] === 1) {
                ans = "ncòbnkʉ  ";
            } else {
                ans = "ncòb" + this.unit(num[0]) + "  ";
            }

        } else if (num[0] !== 0 && num[1] === 0 && num[2] !== 0) {

            if (num[0] === 1) {
                ans = this.unit(num[2]) + "tû ncòbnkʉ  ";
            } else {
                ans = this.unit(num[2]) + "tû ncòb" + this.unit(num[0]) + "  ";
            }

        } else if (num[0] !== 0 && num[1] === 1 && num[2] === 0) {

            if (num[0] === 1) {
                ans = "Mɛnmbʉ̂m ncòbnkʉ  ";
            } else {
                ans = "Mɛnmbʉ̂m ncòb" + this.unit(num[0]) + "  ";
            }

        } else if (num[0] !== 0 && num[1] === 1 && num[2] !== 0) {

            if (num[0] === 1) {
                ans = "ncòb" + this.unit(num[2]) + " Mɛnmbʉ̂m ncòbnkʉ  ";
            } else {
                ans = "ncòb" + this.unit(num[2]) + "Mɛnmbʉ̂m ncòb" + this.unit(num[0]) + "  ";
            }

        } else if (num[0] !== 0 && num[1] !== 0 && num[1] !== 1 && num[2] === 0) {

            if (num[0] === 1) {
                ans = "bon" + this.unit(num[1]) + " ncòbnkʉ  ";
            } else {
                ans = "bon" + this.unit(num[1]) + " ncòb" + this.unit(num[0]) + "  ";
            }

        } else if (num[0] !== 0 && num[1] !== 0 && num[1] !== 1 && num[2] !== 0) {

            if (num[0] === 1) {
                ans = "ncòb" + this.unit(num[2]) + " bon" + this.unit(num[1]) + " ncòbnkʉ  ";
            } else {
                ans = "ncòb" + this.unit(num[2]) + " bon" + this.unit(num[1]) + " ncòb" + this.unit(num[0]) + "  ";
            }

        } else if (num[0] === 0 && num[1] === 0 && num[2] === 0) {
            ans = string.replace(trans[position], "") + trans[position + 1];
            return ans;

        } else if (num[0] === 0 && num[1] === 0 && num[2] !== 0) {

            ans = this.unit(num[2]) + "tû  ";

        } else if (num[0] === 0 && num[1] === 1 && num[2] === 0) {

            ans = "Mɛnmbʉ̂m  ";

        } else if (num[0] === 0 && num[1] === 1 && num[2] !== 0) {

            ans = "ncòb" + this.unit(num[2]) + " mɛnmbʉ̂m  ";

        } else if (num[0] === 0 && num[1] !== 0 && num[1] !== 1 && num[2] === 0) {

            if (num[1] === 1 || num[1] === 2 || num[1] === 3 || num[1] === 5) {

                ans = "bon" + this.unit(num[1]) + "  ";

            } else {
                ans = "bôn" + this.unit(num[1]) + "  ";
            }

        } else if (num[0] === 0 && num[1] !== 0 && num[1] !== 1 && num[2] !== 0) {

            if (num[1] === 1 || num[1] === 2 || num[1] === 3 || num[1] === 5) {

                ans = "ncòb" + this.unit(num[2]) + "  bon" + this.unit(num[1]) + "  ";

            } else {
                ans = "ncòb" + this.unit(num[2]) + "  bôn" + this.unit(num[1]) + "  ";
            }

        }
        if (num[0] === 0 && num[1] === 0 && num[2] === 0) {
            ans = string.replace(trans[position], "") + trans[position + 1];
        } else {
            ans = string + ans + trans[position + 1];
        }
        return ans;

    },
};

const ngalan = {
    time: {},
    day: {
        convert (a) {
            return a === 1 ? "Njàmleʼfitə̀" : a === 2
                ? "Mfɛnntα̂nngəʼə" : a === 3 ? "Ntα̂nngəʼe" : a === 4
                    ? "Njàmntα̂nngəʼə" : a === 5 ? "Mfɛ̀nntα̂nndʉb" : a === 6
                        ? "Ntα̂nndʉb" : a === 7 ? "Leʼfitə̀" : "Not a day (Range 1 - 7 inclusive)";
        }
    },
    month: {
        convert (a) {
            return a === 1 ? "Mbwôgnà" : a === 2 ?
                "Nkàgnὰ" : a === 3 ? "Njwìdcu" : a === 4 ?
                    "Ntàŋmbwə" : a === 5 ? "Nsônὰ" : a === 6 ?
                        "Ŋwâgnkun" : a === 7 ? "Ntôngə̀fələ" : a === 8 ?
                            "Ncòʼcu" : a === 9 ? "Njâgcu" : a === 10 ? "Bə̂ʼnswə" :
                                a === 11 ? "Nsônα̂ndɔ" : a === 12 ? "Ntòngǔdməsaŋə" : "Not a month (Range 1 - 12 inclusive)";
        }
    },

};

const nkab = {
    unitary: "ndəlà",
    convert(n) {
        return "Coming soon";
    },
    unit(n) {

    },
};

module.exports = {
    figure2words: number,
    figure2currency: nkab,
    getDay: ngalan.day.convert,
    getMonth: ngalan.month.convert,
};
