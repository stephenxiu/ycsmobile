(function(window, YCS){

'use strict';

var mobile_cityList = [{'cityList':[{'c':152900,'pc':150000,'n':'阿拉善盟','pn':'内蒙古自治区','bc':230},{'c':210300,'pc':210000,'n':'鞍山市','pn':'辽宁省','bc':320},{'c':340800,'pc':340000,'n':'安庆市','pn':'安徽省','bc':130},{'c':410500,'pc':410000,'n':'安阳市','pn':'河南省','bc':267},{'c':513200,'pc':510000,'n':'阿坝藏族羌族自治州','pn':'四川省','bc':185},{'c':520400,'pc':520000,'n':'安顺市','pn':'贵州省','bc':263},{'c':542500,'pc':540000,'n':'阿里地区','pn':'西藏自治区','bc':103},{'c':610900,'pc':610000,'n':'安康市','pn':'陕西省','bc':324},{'c':652900,'pc':650000,'n':'阿克苏地区','pn':'新疆维吾尔自治区','bc':85},{'c':654300,'pc':650000,'n':'阿勒泰地区','pn':'新疆维吾尔自治区','bc':96},{'c':820100,'pc':820000,'n':'澳门半岛','pn':'澳门特别行政区','bc':0}],'spell':'A'},{'cityList':[{'c':110100,'pc':110000,'n':'北京市','pn':'北京市','bc':131},{'c':130600,'pc':130000,'n':'保定市','pn':'河北省','bc':307},{'c':150200,'pc':150000,'n':'包头市','pn':'内蒙古自治区','bc':229},{'c':150800,'pc':150000,'n':'巴彦淖尔市','pn':'内蒙古自治区','bc':169},{'c':210500,'pc':210000,'n':'本溪市','pn':'辽宁省','bc':227},{'c':220600,'pc':220000,'n':'白山市','pn':'吉林省','bc':57},{'c':220800,'pc':220000,'n':'白城市','pn':'吉林省','bc':51},{'c':340300,'pc':340000,'n':'蚌埠市','pn':'安徽省','bc':126},{'c':341600,'pc':340000,'n':'亳州市','pn':'安徽省','bc':188},{'c':371600,'pc':370000,'n':'滨州市','pn':'山东省','bc':235},{'c':450500,'pc':450000,'n':'北海市','pn':'广西壮族自治区','bc':295},{'c':451000,'pc':450000,'n':'百色市','pn':'广西壮族自治区','bc':203},{'c':511900,'pc':510000,'n':'巴中市','pn':'四川省','bc':239},{'c':520500,'pc':520000,'n':'毕节市','pn':'贵州省','bc':206},{'c':530500,'pc':530000,'n':'保山市','pn':'云南省','bc':112},{'c':610300,'pc':610000,'n':'宝鸡市','pn':'陕西省','bc':171},{'c':620400,'pc':620000,'n':'白银市','pn':'甘肃省','bc':35},{'c':652700,'pc':650000,'n':'博尔塔拉蒙古自治州','pn':'新疆维吾尔自治区','bc':88},{'c':652800,'pc':650000,'n':'巴音郭楞蒙古自治州','pn':'新疆维吾尔自治区','bc':86}],'spell':'B'},{'cityList':[{'c':130800,'pc':130000,'n':'承德市','pn':'河北省','bc':207},{'c':130900,'pc':130000,'n':'沧州市','pn':'河北省','bc':149},{'c':150400,'pc':150000,'n':'赤峰市','pn':'内蒙古自治区','bc':297},{'c':211300,'pc':210000,'n':'朝阳市','pn':'辽宁省','bc':280},{'c':320400,'pc':320000,'n':'常州市','pn':'江苏省','bc':348},{'c':341100,'pc':340000,'n':'滁州市','pn':'安徽省','bc':189},{'c':341700,'pc':340000,'n':'池州市','pn':'安徽省','bc':299},{'c':430700,'pc':430000,'n':'常德市','pn':'湖南省','bc':219},{'c':431000,'pc':430000,'n':'郴州市','pn':'湖南省','bc':275},{'c':445100,'pc':440000,'n':'潮州市','pn':'广东省','bc':201},{'c':451400,'pc':450000,'n':'崇左市','pn':'广西壮族自治区','bc':144},{'c':500100,'pc':500000,'n':'重庆市','pn':'重庆市','bc':132},{'c':510100,'pc':510000,'n':'成都市','pn':'四川省','bc':75},{'c':532300,'pc':530000,'n':'楚雄彝族自治州','pn':'云南省','bc':105},{'c':540300,'pc':540000,'n':'昌都市','pn':'西藏自治区','bc':99},{'c':652300,'pc':650000,'n':'昌吉回族自治州','pn':'新疆维吾尔自治区','bc':93}],'spell':'C'},{'cityList':[{'c':140200,'pc':140000,'n':'大同市','pn':'山西省','bc':355},{'c':210200,'pc':210000,'n':'大连市','pn':'辽宁省','bc':167},{'c':210600,'pc':210000,'n':'丹东市','pn':'辽宁省','bc':282},{'c':230600,'pc':230000,'n':'大庆市','pn':'黑龙江省','bc':50},{'c':232700,'pc':230000,'n':'大兴安岭地区','pn':'黑龙江省','bc':38},{'c':370500,'pc':370000,'n':'东营市','pn':'山东省','bc':174},{'c':371400,'pc':370000,'n':'德州市','pn':'山东省','bc':372},{'c':441900,'pc':440000,'n':'东莞市','pn':'广东省','bc':119},{'c':460400,'pc':460000,'n':'儋州市','pn':'海南省','bc':0},{'c':510600,'pc':510000,'n':'德阳市','pn':'四川省','bc':74},{'c':511700,'pc':510000,'n':'达州市','pn':'四川省','bc':369},{'c':532900,'pc':530000,'n':'大理白族自治州','pn':'云南省','bc':111},{'c':533100,'pc':530000,'n':'德宏傣族景颇族自治州','pn':'云南省','bc':116},{'c':533400,'pc':530000,'n':'迪庆藏族自治州','pn':'云南省','bc':115},{'c':621100,'pc':620000,'n':'定西市','pn':'甘肃省','bc':136},{'c':820200,'pc':820000,'n':'氹仔岛','pn':'澳门特别行政区','bc':0}],'spell':'D'},{'cityList':[{'c':150600,'pc':150000,'n':'鄂尔多斯市','pn':'内蒙古自治区','bc':283},{'c':420700,'pc':420000,'n':'鄂州市','pn':'湖北省','bc':122},{'c':422800,'pc':420000,'n':'恩施土家族苗族自治州','pn':'湖北省','bc':373}],'spell':'E'},{'cityList':[{'c':210400,'pc':210000,'n':'抚顺市','pn':'辽宁省','bc':184},{'c':210900,'pc':210000,'n':'阜新市','pn':'辽宁省','bc':59},{'c':341200,'pc':340000,'n':'阜阳市','pn':'安徽省','bc':128},{'c':350100,'pc':350000,'n':'福州市','pn':'福建省','bc':300},{'c':361000,'pc':360000,'n':'抚州市','pn':'江西省','bc':226},{'c':440600,'pc':440000,'n':'佛山市','pn':'广东省','bc':138},{'c':450600,'pc':450000,'n':'防城港市','pn':'广西壮族自治区','bc':204}],'spell':'F'},{'cityList':[{'c':360700,'pc':360000,'n':'赣州市','pn':'江西省','bc':365},{'c':440100,'pc':440000,'n':'广州市','pn':'广东省','bc':257},{'c':450300,'pc':450000,'n':'桂林市','pn':'广西壮族自治区','bc':142},{'c':450800,'pc':450000,'n':'贵港市','pn':'广西壮族自治区','bc':341},{'c':510800,'pc':510000,'n':'广元市','pn':'四川省','bc':329},{'c':511600,'pc':510000,'n':'广安市','pn':'四川省','bc':241},{'c':513300,'pc':510000,'n':'甘孜藏族自治州','pn':'四川省','bc':73},{'c':520100,'pc':520000,'n':'贵阳市','pn':'贵州省','bc':146},{'c':623000,'pc':620000,'n':'甘南藏族自治州','pn':'甘肃省','bc':247},{'c':632600,'pc':630000,'n':'果洛藏族自治州','pn':'青海省','bc':72},{'c':640400,'pc':640000,'n':'固原市','pn':'宁夏回族自治区','bc':246},{'c':710200,'pc':710000,'n':'高雄市','pn':'台湾省','bc':0}],'spell':'G'},{'cityList':[{'c':130400,'pc':130000,'n':'邯郸市','pn':'河北省','bc':151},{'c':131100,'pc':130000,'n':'衡水市','pn':'河北省','bc':208},{'c':150100,'pc':150000,'n':'呼和浩特市','pn':'内蒙古自治区','bc':321},{'c':150700,'pc':150000,'n':'呼伦贝尔市','pn':'内蒙古自治区','bc':61},{'c':211400,'pc':210000,'n':'葫芦岛市','pn':'辽宁省','bc':319},{'c':230100,'pc':230000,'n':'哈尔滨市','pn':'黑龙江省','bc':48},{'c':230400,'pc':230000,'n':'鹤岗市','pn':'黑龙江省','bc':43},{'c':231100,'pc':230000,'n':'黑河市','pn':'黑龙江省','bc':39},{'c':320800,'pc':320000,'n':'淮安市','pn':'江苏省','bc':162},{'c':330100,'pc':330000,'n':'杭州市','pn':'浙江省','bc':179},{'c':330500,'pc':330000,'n':'湖州市','pn':'浙江省','bc':294},{'c':340100,'pc':340000,'n':'合肥市','pn':'安徽省','bc':127},{'c':340400,'pc':340000,'n':'淮南市','pn':'安徽省','bc':250},{'c':340600,'pc':340000,'n':'淮北市','pn':'安徽省','bc':253},{'c':341000,'pc':340000,'n':'黄山市','pn':'安徽省','bc':252},{'c':371700,'pc':370000,'n':'菏泽市','pn':'山东省','bc':353},{'c':410600,'pc':410000,'n':'鹤壁市','pn':'河南省','bc':215},{'c':419000,'pc':410000,'n':'河南省其他地区','pn':'河南省','bc':1277},{'c':420200,'pc':420000,'n':'黄石市','pn':'湖北省','bc':311},{'c':421100,'pc':420000,'n':'黄冈市','pn':'湖北省','bc':271},{'c':429000,'pc':420000,'n':'湖北省其他地区','pn':'湖北省','bc':345},{'c':430400,'pc':430000,'n':'衡阳市','pn':'湖南省','bc':159},{'c':431200,'pc':430000,'n':'怀化市','pn':'湖南省','bc':363},{'c':441300,'pc':440000,'n':'惠州市','pn':'广东省','bc':301},{'c':441600,'pc':440000,'n':'河源市','pn':'广东省','bc':200},{'c':451100,'pc':450000,'n':'贺州市','pn':'广西壮族自治区','bc':260},{'c':451200,'pc':450000,'n':'河池市','pn':'广西壮族自治区','bc':143},{'c':460100,'pc':460000,'n':'海口市','pn':'海南省','bc':125},{'c':469000,'pc':460000,'n':'海南省其他地区','pn':'海南省','bc':296},{'c':532500,'pc':530000,'n':'红河哈尼族彝族自治州','pn':'云南省','bc':107},{'c':610700,'pc':610000,'n':'汉中市','pn':'陕西省','bc':352},{'c':630200,'pc':630000,'n':'海东市','pn':'青海省','bc':69},{'c':632200,'pc':630000,'n':'海北藏族自治州','pn':'青海省','bc':67},{'c':632300,'pc':630000,'n':'黄南藏族自治州','pn':'青海省','bc':70},{'c':632500,'pc':630000,'n':'海南藏族自治州','pn':'青海省','bc':68},{'c':632800,'pc':630000,'n':'海西蒙古族藏族自治州','pn':'青海省','bc':65},{'c':652200,'pc':650000,'n':'哈密地区','pn':'新疆维吾尔自治区','bc':91},{'c':653200,'pc':650000,'n':'和田地区','pn':'新疆维吾尔自治区','bc':82},{'c':713500,'pc':710000,'n':'花莲县','pn':'台湾省','bc':0}],'spell':'H'},{'cityList':[],'spell':'I'},{'cityList':[{'c':140500,'pc':140000,'n':'晋城市','pn':'山西省','bc':290},{'c':140700,'pc':140000,'n':'晋中市','pn':'山西省','bc':238},{'c':210700,'pc':210000,'n':'锦州市','pn':'辽宁省','bc':166},{'c':220200,'pc':220000,'n':'吉林市','pn':'吉林省','bc':55},{'c':230300,'pc':230000,'n':'鸡西市','pn':'黑龙江省','bc':46},{'c':230800,'pc':230000,'n':'佳木斯市','pn':'黑龙江省','bc':42},{'c':330400,'pc':330000,'n':'嘉兴市','pn':'浙江省','bc':334},{'c':330700,'pc':330000,'n':'金华市','pn':'浙江省','bc':333},{'c':360200,'pc':360000,'n':'景德镇市','pn':'江西省','bc':225},{'c':360400,'pc':360000,'n':'九江市','pn':'江西省','bc':349},{'c':360800,'pc':360000,'n':'吉安市','pn':'江西省','bc':318},{'c':370100,'pc':370000,'n':'济南市','pn':'山东省','bc':288},{'c':370800,'pc':370000,'n':'济宁市','pn':'山东省','bc':286},{'c':410800,'pc':410000,'n':'焦作市','pn':'河南省','bc':211},{'c':420800,'pc':420000,'n':'荆门市','pn':'湖北省','bc':217},{'c':421000,'pc':420000,'n':'荆州市','pn':'湖北省','bc':157},{'c':440700,'pc':440000,'n':'江门市','pn':'广东省','bc':302},{'c':445200,'pc':440000,'n':'揭阳市','pn':'广东省','bc':259},{'c':620200,'pc':620000,'n':'嘉峪关市','pn':'甘肃省','bc':33},{'c':620300,'pc':620000,'n':'金昌市','pn':'甘肃省','bc':34},{'c':620900,'pc':620000,'n':'酒泉市','pn':'甘肃省','bc':37},{'c':710300,'pc':710000,'n':'基隆市','pn':'台湾省','bc':0},{'c':710700,'pc':710000,'n':'嘉义市','pn':'台湾省','bc':0},{'c':713000,'pc':710000,'n':'嘉义县','pn':'台湾省','bc':0},{'c':810200,'pc':810000,'n':'九龙','pn':'香港特别行政区','bc':0}],'spell':'J'},{'cityList':[{'c':410200,'pc':410000,'n':'开封市','pn':'河南省','bc':210},{'c':530100,'pc':530000,'n':'昆明市','pn':'云南省','bc':104},{'c':650200,'pc':650000,'n':'克拉玛依市','pn':'新疆维吾尔自治区','bc':95},{'c':653000,'pc':650000,'n':'克孜勒苏柯尔克孜自治州','pn':'新疆维吾尔自治区','bc':84},{'c':653100,'pc':650000,'n':'喀什地区','pn':'新疆维吾尔自治区','bc':83}],'spell':'K'},{'cityList':[{'c':131000,'pc':130000,'n':'廊坊市','pn':'河北省','bc':191},{'c':141000,'pc':140000,'n':'临汾市','pn':'山西省','bc':368},{'c':141100,'pc':140000,'n':'吕梁市','pn':'山西省','bc':327},{'c':211000,'pc':210000,'n':'辽阳市','pn':'辽宁省','bc':351},{'c':220400,'pc':220000,'n':'辽源市','pn':'吉林省','bc':183},{'c':320700,'pc':320000,'n':'连云港市','pn':'江苏省','bc':347},{'c':331100,'pc':330000,'n':'丽水市','pn':'浙江省','bc':292},{'c':341500,'pc':340000,'n':'六安市','pn':'安徽省','bc':298},{'c':350800,'pc':350000,'n':'龙岩市','pn':'福建省','bc':193},{'c':371200,'pc':370000,'n':'莱芜市','pn':'山东省','bc':124},{'c':371300,'pc':370000,'n':'临沂市','pn':'山东省','bc':234},{'c':371500,'pc':370000,'n':'聊城市','pn':'山东省','bc':366},{'c':410300,'pc':410000,'n':'洛阳市','pn':'河南省','bc':153},{'c':411100,'pc':410000,'n':'漯河市','pn':'河南省','bc':344},{'c':431300,'pc':430000,'n':'娄底市','pn':'湖南省','bc':221},{'c':450200,'pc':450000,'n':'柳州市','pn':'广西壮族自治区','bc':305},{'c':451300,'pc':450000,'n':'来宾市','pn':'广西壮族自治区','bc':202},{'c':510500,'pc':510000,'n':'泸州市','pn':'四川省','bc':331},{'c':511100,'pc':510000,'n':'乐山市','pn':'四川省','bc':79},{'c':513400,'pc':510000,'n':'凉山彝族自治州','pn':'四川省','bc':80},{'c':520200,'pc':520000,'n':'六盘水市','pn':'贵州省','bc':147},{'c':530700,'pc':530000,'n':'丽江市','pn':'云南省','bc':114},{'c':530900,'pc':530000,'n':'临沧市','pn':'云南省','bc':110},{'c':540100,'pc':540000,'n':'拉萨市','pn':'西藏自治区','bc':100},{'c':540400,'pc':540000,'n':'林芝市','pn':'西藏自治区','bc':98},{'c':620100,'pc':620000,'n':'兰州市','pn':'甘肃省','bc':36},{'c':621200,'pc':620000,'n':'陇南市','pn':'甘肃省','bc':256},{'c':622900,'pc':620000,'n':'临夏回族自治州','pn':'甘肃省','bc':182},{'c':820300,'pc':820000,'n':'路环岛','pn':'澳门特别行政区','bc':0}],'spell':'L'},{'cityList':[{'c':231000,'pc':230000,'n':'牡丹江市','pn':'黑龙江省','bc':49},{'c':340500,'pc':340000,'n':'马鞍山市','pn':'安徽省','bc':358},{'c':440900,'pc':440000,'n':'茂名市','pn':'广东省','bc':139},{'c':441400,'pc':440000,'n':'梅州市','pn':'广东省','bc':141},{'c':510700,'pc':510000,'n':'绵阳市','pn':'四川省','bc':240},{'c':511400,'pc':510000,'n':'眉山市','pn':'四川省','bc':77},{'c':712500,'pc':710000,'n':'苗栗县','pn':'台湾省','bc':0}],'spell':'M'},{'cityList':[{'c':320100,'pc':320000,'n':'南京市','pn':'江苏省','bc':315},{'c':320600,'pc':320000,'n':'南通市','pn':'江苏省','bc':161},{'c':330200,'pc':330000,'n':'宁波市','pn':'浙江省','bc':180},{'c':350700,'pc':350000,'n':'南平市','pn':'福建省','bc':133},{'c':350900,'pc':350000,'n':'宁德市','pn':'福建省','bc':192},{'c':360100,'pc':360000,'n':'南昌市','pn':'江西省','bc':163},{'c':411300,'pc':410000,'n':'南阳市','pn':'河南省','bc':309},{'c':450100,'pc':450000,'n':'南宁市','pn':'广西壮族自治区','bc':261},{'c':511000,'pc':510000,'n':'内江市','pn':'四川省','bc':248},{'c':511300,'pc':510000,'n':'南充市','pn':'四川省','bc':291},{'c':533300,'pc':530000,'n':'怒江傈僳族自治州','pn':'云南省','bc':113},{'c':542400,'pc':540000,'n':'那曲地区','pn':'西藏自治区','bc':101},{'c':712800,'pc':710000,'n':'南投县','pn':'台湾省','bc':0}],'spell':'N'},{'cityList':[],'spell':'O'},{'cityList':[{'c':211100,'pc':210000,'n':'盘锦市','pn':'辽宁省','bc':228},{'c':350300,'pc':350000,'n':'莆田市','pn':'福建省','bc':195},{'c':360300,'pc':360000,'n':'萍乡市','pn':'江西省','bc':350},{'c':410400,'pc':410000,'n':'平顶山市','pn':'河南省','bc':213},{'c':410900,'pc':410000,'n':'濮阳市','pn':'河南省','bc':209},{'c':510400,'pc':510000,'n':'攀枝花市','pn':'四川省','bc':81},{'c':530800,'pc':530000,'n':'普洱市','pn':'云南省','bc':108},{'c':620800,'pc':620000,'n':'平凉市','pn':'甘肃省','bc':359},{'c':713300,'pc':710000,'n':'屏东县','pn':'台湾省','bc':0},{'c':713600,'pc':710000,'n':'澎湖县','pn':'台湾省','bc':0}],'spell':'P'},{'cityList':[{'c':130300,'pc':130000,'n':'秦皇岛市','pn':'河北省','bc':148},{'c':230200,'pc':230000,'n':'齐齐哈尔市','pn':'黑龙江省','bc':41},{'c':230900,'pc':230000,'n':'七台河市','pn':'黑龙江省','bc':47},{'c':330800,'pc':330000,'n':'衢州市','pn':'浙江省','bc':243},{'c':350500,'pc':350000,'n':'泉州市','pn':'福建省','bc':134},{'c':370200,'pc':370000,'n':'青岛市','pn':'山东省','bc':236},{'c':441800,'pc':440000,'n':'清远市','pn':'广东省','bc':197},{'c':450700,'pc':450000,'n':'钦州市','pn':'广西壮族自治区','bc':145},{'c':522300,'pc':520000,'n':'黔西南布依族苗族自治州','pn':'贵州省','bc':343},{'c':522600,'pc':520000,'n':'黔东南苗族侗族自治州','pn':'贵州省','bc':342},{'c':522700,'pc':520000,'n':'黔南布依族苗族自治州','pn':'贵州省','bc':306},{'c':530300,'pc':530000,'n':'曲靖市','pn':'云南省','bc':249},{'c':621000,'pc':620000,'n':'庆阳市','pn':'甘肃省','bc':135}],'spell':'Q'},{'cityList':[{'c':371100,'pc':370000,'n':'日照市','pn':'山东省','bc':173},{'c':540200,'pc':540000,'n':'日喀则市','pn':'西藏自治区','bc':102}],'spell':'R'},{'cityList':[{'c':130100,'pc':130000,'n':'石家庄市','pn':'河北省','bc':150},{'c':140600,'pc':140000,'n':'朔州市','pn':'山西省','bc':237},{'c':210100,'pc':210000,'n':'沈阳市','pn':'辽宁省','bc':58},{'c':220300,'pc':220000,'n':'四平市','pn':'吉林省','bc':56},{'c':220700,'pc':220000,'n':'松原市','pn':'吉林省','bc':52},{'c':230500,'pc':230000,'n':'双鸭山市','pn':'黑龙江省','bc':45},{'c':231200,'pc':230000,'n':'绥化市','pn':'黑龙江省','bc':44},{'c':310100,'pc':310000,'n':'上海市','pn':'上海市','bc':289},{'c':320500,'pc':320000,'n':'苏州市','pn':'江苏省','bc':224},{'c':321300,'pc':320000,'n':'宿迁市','pn':'江苏省','bc':277},{'c':330600,'pc':330000,'n':'绍兴市','pn':'浙江省','bc':293},{'c':341300,'pc':340000,'n':'宿州市','pn':'安徽省','bc':370},{'c':350200,'pc':350000,'n':'厦门市','pn':'福建省','bc':194},{'c':350400,'pc':350000,'n':'三明市','pn':'福建省','bc':254},{'c':361100,'pc':360000,'n':'上饶市','pn':'江西省','bc':364},{'c':411200,'pc':410000,'n':'三门峡市','pn':'河南省','bc':212},{'c':411400,'pc':410000,'n':'商丘市','pn':'河南省','bc':154},{'c':420300,'pc':420000,'n':'十堰市','pn':'湖北省','bc':216},{'c':421300,'pc':420000,'n':'随州市','pn':'湖北省','bc':371},{'c':430500,'pc':430000,'n':'邵阳市','pn':'湖南省','bc':273},{'c':440200,'pc':440000,'n':'韶关市','pn':'广东省','bc':137},{'c':440300,'pc':440000,'n':'深圳市','pn':'广东省','bc':340},{'c':440500,'pc':440000,'n':'汕头市','pn':'广东省','bc':303},{'c':441500,'pc':440000,'n':'汕尾市','pn':'广东省','bc':339},{'c':460200,'pc':460000,'n':'三亚市','pn':'海南省','bc':121},{'c':460300,'pc':460000,'n':'三沙市','pn':'海南省','bc':0},{'c':510900,'pc':510000,'n':'遂宁市','pn':'四川省','bc':330},{'c':542200,'pc':540000,'n':'山南地区','pn':'西藏自治区','bc':97},{'c':611000,'pc':610000,'n':'商洛市','pn':'陕西省','bc':285},{'c':640200,'pc':640000,'n':'石嘴山市','pn':'宁夏回族自治区','bc':335}],'spell':'S'},{'cityList':[{'c':120100,'pc':120000,'n':'天津市','pn':'天津市','bc':332},{'c':130200,'pc':130000,'n':'唐山市','pn':'河北省','bc':265},{'c':140100,'pc':140000,'n':'太原市','pn':'山西省','bc':176},{'c':150500,'pc':150000,'n':'通辽市','pn':'内蒙古自治区','bc':64},{'c':211200,'pc':210000,'n':'铁岭市','pn':'辽宁省','bc':60},{'c':220500,'pc':220000,'n':'通化市','pn':'吉林省','bc':165},{'c':321200,'pc':320000,'n':'泰州市','pn':'江苏省','bc':276},{'c':331000,'pc':330000,'n':'台州市','pn':'浙江省','bc':244},{'c':340700,'pc':340000,'n':'铜陵市','pn':'安徽省','bc':337},{'c':370900,'pc':370000,'n':'泰安市','pn':'山东省','bc':325},{'c':520600,'pc':520000,'n':'铜仁市','pn':'贵州省','bc':205},{'c':610200,'pc':610000,'n':'铜川市','pn':'陕西省','bc':232},{'c':620500,'pc':620000,'n':'天水市','pn':'甘肃省','bc':196},{'c':650400,'pc':650000,'n':'吐鲁番市','pn':'新疆维吾尔自治区','bc':89},{'c':654200,'pc':650000,'n':'塔城地区','pn':'新疆维吾尔自治区','bc':94},{'c':710100,'pc':710000,'n':'台北市','pn':'台湾省','bc':0},{'c':710400,'pc':710000,'n':'台中市','pn':'台湾省','bc':0},{'c':710500,'pc':710000,'n':'台南市','pn':'台湾省','bc':0},{'c':710900,'pc':710000,'n':'桃园市','pn':'台湾省','bc':0},{'c':713400,'pc':710000,'n':'台东县','pn':'台湾省','bc':0}],'spell':'T'},{'cityList':[],'spell':'U'},{'cityList':[],'spell':'V'},{'cityList':[{'c':150300,'pc':150000,'n':'乌海市','pn':'内蒙古自治区','bc':123},{'c':150900,'pc':150000,'n':'乌兰察布市','pn':'内蒙古自治区','bc':168},{'c':320200,'pc':320000,'n':'无锡市','pn':'江苏省','bc':317},{'c':330300,'pc':330000,'n':'温州市','pn':'浙江省','bc':178},{'c':340200,'pc':340000,'n':'芜湖市','pn':'安徽省','bc':129},{'c':370700,'pc':370000,'n':'潍坊市','pn':'山东省','bc':287},{'c':371000,'pc':370000,'n':'威海市','pn':'山东省','bc':175},{'c':420100,'pc':420000,'n':'武汉市','pn':'湖北省','bc':218},{'c':450400,'pc':450000,'n':'梧州市','pn':'广西壮族自治区','bc':304},{'c':532600,'pc':530000,'n':'文山壮族苗族自治州','pn':'云南省','bc':177},{'c':610500,'pc':610000,'n':'渭南市','pn':'陕西省','bc':170},{'c':620600,'pc':620000,'n':'武威市','pn':'甘肃省','bc':118},{'c':640300,'pc':640000,'n':'吴忠市','pn':'宁夏回族自治区','bc':322},{'c':650100,'pc':650000,'n':'乌鲁木齐市','pn':'新疆维吾尔自治区','bc':92}],'spell':'W'},{'cityList':[{'c':130500,'pc':130000,'n':'邢台市','pn':'河北省','bc':266},{'c':140900,'pc':140000,'n':'忻州市','pn':'山西省','bc':367},{'c':152200,'pc':150000,'n':'兴安盟','pn':'内蒙古自治区','bc':62},{'c':152500,'pc':150000,'n':'锡林郭勒盟','pn':'内蒙古自治区','bc':63},{'c':320300,'pc':320000,'n':'徐州市','pn':'江苏省','bc':316},{'c':341800,'pc':340000,'n':'宣城市','pn':'安徽省','bc':190},{'c':360500,'pc':360000,'n':'新余市','pn':'江西省','bc':164},{'c':410700,'pc':410000,'n':'新乡市','pn':'河南省','bc':152},{'c':411000,'pc':410000,'n':'许昌市','pn':'河南省','bc':155},{'c':411500,'pc':410000,'n':'信阳市','pn':'河南省','bc':214},{'c':420600,'pc':420000,'n':'襄阳市','pn':'湖北省','bc':156},{'c':420900,'pc':420000,'n':'孝感市','pn':'湖北省','bc':310},{'c':421200,'pc':420000,'n':'咸宁市','pn':'湖北省','bc':362},{'c':430300,'pc':430000,'n':'湘潭市','pn':'湖南省','bc':313},{'c':433100,'pc':430000,'n':'湘西土家族苗族自治州','pn':'湖南省','bc':274},{'c':532800,'pc':530000,'n':'西双版纳傣族自治州','pn':'云南省','bc':109},{'c':610100,'pc':610000,'n':'西安市','pn':'陕西省','bc':233},{'c':610400,'pc':610000,'n':'咸阳市','pn':'陕西省','bc':323},{'c':630100,'pc':630000,'n':'西宁市','pn':'青海省','bc':66},{'c':659000,'pc':650000,'n':'新疆省其他地区','pn':'新疆维吾尔自治区','bc':87},{'c':710600,'pc':710000,'n':'新竹市','pn':'台湾省','bc':0},{'c':710800,'pc':710000,'n':'新北市','pn':'台湾省','bc':0},{'c':712400,'pc':710000,'n':'新竹县','pn':'台湾省','bc':0},{'c':810100,'pc':810000,'n':'香港岛','pn':'香港特别行政区','bc':0},{'c':810300,'pc':810000,'n':'新界','pn':'香港特别行政区','bc':0}],'spell':'X'},{'cityList':[{'c':140300,'pc':140000,'n':'阳泉市','pn':'山西省','bc':357},{'c':140800,'pc':140000,'n':'运城市','pn':'山西省','bc':328},{'c':210800,'pc':210000,'n':'营口市','pn':'辽宁省','bc':281},{'c':222400,'pc':220000,'n':'延边朝鲜族自治州','pn':'吉林省','bc':54},{'c':230700,'pc':230000,'n':'伊春市','pn':'黑龙江省','bc':40},{'c':320900,'pc':320000,'n':'盐城市','pn':'江苏省','bc':223},{'c':321000,'pc':320000,'n':'扬州市','pn':'江苏省','bc':346},{'c':360600,'pc':360000,'n':'鹰潭市','pn':'江西省','bc':279},{'c':360900,'pc':360000,'n':'宜春市','pn':'江西省','bc':278},{'c':370600,'pc':370000,'n':'烟台市','pn':'山东省','bc':326},{'c':420500,'pc':420000,'n':'宜昌市','pn':'湖北省','bc':270},{'c':430600,'pc':430000,'n':'岳阳市','pn':'湖南省','bc':220},{'c':430900,'pc':430000,'n':'益阳市','pn':'湖南省','bc':272},{'c':431100,'pc':430000,'n':'永州市','pn':'湖南省','bc':314},{'c':441700,'pc':440000,'n':'阳江市','pn':'广东省','bc':199},{'c':445300,'pc':440000,'n':'云浮市','pn':'广东省','bc':258},{'c':450900,'pc':450000,'n':'玉林市','pn':'广西壮族自治区','bc':361},{'c':511500,'pc':510000,'n':'宜宾市','pn':'四川省','bc':186},{'c':511800,'pc':510000,'n':'雅安市','pn':'四川省','bc':76},{'c':530400,'pc':530000,'n':'玉溪市','pn':'云南省','bc':106},{'c':610600,'pc':610000,'n':'延安市','pn':'陕西省','bc':284},{'c':610800,'pc':610000,'n':'榆林市','pn':'陕西省','bc':231},{'c':632700,'pc':630000,'n':'玉树藏族自治州','pn':'青海省','bc':71},{'c':640100,'pc':640000,'n':'银川市','pn':'宁夏回族自治区','bc':360},{'c':654000,'pc':650000,'n':'伊犁哈萨克自治州','pn':'新疆维吾尔自治区','bc':90},{'c':712200,'pc':710000,'n':'宜兰县','pn':'台湾省','bc':0},{'c':712900,'pc':710000,'n':'云林县','pn':'台湾省','bc':0}],'spell':'Y'},{'cityList':[{'c':130700,'pc':130000,'n':'张家口市','pn':'河北省','bc':264},{'c':140400,'pc':140000,'n':'长治市','pn':'山西省','bc':356},{'c':220100,'pc':220000,'n':'长春市','pn':'吉林省','bc':53},{'c':321100,'pc':320000,'n':'镇江市','pn':'江苏省','bc':160},{'c':330900,'pc':330000,'n':'舟山市','pn':'浙江省','bc':245},{'c':350600,'pc':350000,'n':'漳州市','pn':'福建省','bc':255},{'c':370300,'pc':370000,'n':'淄博市','pn':'山东省','bc':354},{'c':370400,'pc':370000,'n':'枣庄市','pn':'山东省','bc':172},{'c':410100,'pc':410000,'n':'郑州市','pn':'河南省','bc':268},{'c':411600,'pc':410000,'n':'周口市','pn':'河南省','bc':308},{'c':411700,'pc':410000,'n':'驻马店市','pn':'河南省','bc':269},{'c':430100,'pc':430000,'n':'长沙市','pn':'湖南省','bc':158},{'c':430200,'pc':430000,'n':'株洲市','pn':'湖南省','bc':222},{'c':430800,'pc':430000,'n':'张家界市','pn':'湖南省','bc':312},{'c':440400,'pc':440000,'n':'珠海市','pn':'广东省','bc':140},{'c':440800,'pc':440000,'n':'湛江市','pn':'广东省','bc':198},{'c':441200,'pc':440000,'n':'肇庆市','pn':'广东省','bc':338},{'c':442000,'pc':440000,'n':'中山市','pn':'广东省','bc':187},{'c':510300,'pc':510000,'n':'自贡市','pn':'四川省','bc':78},{'c':512000,'pc':510000,'n':'资阳市','pn':'四川省','bc':242},{'c':520300,'pc':520000,'n':'遵义市','pn':'贵州省','bc':262},{'c':530600,'pc':530000,'n':'昭通市','pn':'云南省','bc':336},{'c':620700,'pc':620000,'n':'张掖市','pn':'甘肃省','bc':117},{'c':640500,'pc':640000,'n':'中卫市','pn':'宁夏回族自治区','bc':181},{'c':712700,'pc':710000,'n':'彰化县','pn':'台湾省','bc':0}],'spell':'Z'}];

YCS.LIB.cityList = mobile_cityList;


var reMap = {};

mobile_cityList.forEach(function (section) {
	if (section.cityList && section.cityList.length) {
		section.cityList.forEach(function(city) {
			reMap[city.bc] = city;
		});
	}
});

YCS.LIB.bdCityCode = reMap;

})(window, window.YCS);