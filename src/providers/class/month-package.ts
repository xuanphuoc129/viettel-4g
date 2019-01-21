import { Utils } from "../app-module/util";

export class Packages {
    name: string = "";
    title: string = "";
    description: string = "";
    items: Array<Package> = [];
    id: number = -1;
    constructor(data?: any) {
        this.items.push(new Package({ id: 1 }));
        this.items.push(new Package({ id: 2 }));
        this.items.push(new Package({ id: 3 }));
        this.items.push(new Package({ id: 4 }));
        if (data) {
            this.parseData(data);
        }
    }

    parseData(data) {
        if ("id" in data) this.id = parseInt(data.id);
        if ("name" in data) this.name = data.name;
        if ("title" in data) this.title = data.title;
        if ("description" in data) this.description = data.description;
        if ("items" in data) this.parseItems(data.items);
    }

    parseItems(data) {
        if (data) {
            this.items = [];
            data.forEach(element => {
                this.items.push(new Package(element));
            });
        }
    }
}

export class MonthPackages extends Packages {

    constructor() {
        super();
        this.name = "Gói tháng";
        this.title = "Trọn gói chỉ từ 70.000đ - Sử dụng trên mạng 3G/4G";
        this.description = "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G. \n Với 70.000đ Quý khách sẽ có 3GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau).";
    }

}

export class EcoDataPackages extends Packages {

    constructor() {
        super();
        this.name = "Eco data";
        this.title = "Luôn tốc độ cao";
        this.description = "";
    }

}

export class MorePackages extends Packages {

    constructor() {
        super();
        this.name = "Gói mua thêm";
        this.title = "Gói mua thêm lưu lượng";
        this.description = "";
    }

}

export class TomatoPackages extends Packages {
    constructor() {
        super();
        this.name = "Tomoto Data";
        this.title = "Không giới hạn thời gian sử dụng";
        this.description = "";
    }
}

export class SixtyGBPackages extends Packages {
    constructor() {
        super();
        this.name = "Gói 60GB / tháng";
        this.title = "Lướt web, liên lạc tẹt ga không lo về giá";
        this.description = "";
    }
}

export class DayPackages extends Packages {
    constructor() {
        super();
        this.name = "Gói ngày";
        this.title = "Phù hợp với nhu cầu data không thường xuyên";
        this.description = "";
    }
}

export class DcomDataPackages extends Packages {
    constructor() {
        super();
        this.name = "GÓI DATA ONLY (DCOM)";
        this.title = "Chỉ dành cho sim DCOM";
        this.description = "";
    }
}

export class MoreDataDcomPackages extends Packages {
    constructor() {
        super();
        this.name = "MUA THÊM DATA DCOM";
        this.title = "Mua thêm khi hết lưu lượng data";
        this.description = "";
    }
}


export class Package {
    p_id: number = -1;
    id: number = -1;
    name: string = "Mimax 70";
    data: string = "3Gb";
    price: string = "70,000 đ";
    time: string = "30 ngày";
    isHot: boolean = true;
    description: string = "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G. \n Với 70.000đ Quý khách sẽ có 3GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau).";
    url: string = "";
    constructor(data?: any) {
        if (data) {
            this.parseData(data);
        }
    }

    parseData(data) {
        if (data) {
            if ("p_id" in data) this.p_id = parseInt(data.p_id);
            if ("id" in data) this.id = parseInt(data.id);
            if ("name" in data) this.name = data.name;
            if ("data" in data) this.data = data.data;
            if ("price" in data) this.price = data.price;
            if ("time" in data) this.time = data.time;
            if ("isHot" in data) this.isHot = data.isHot;
            if ("description" in data) this.description = data.description;
            if ("url" in data) this.url = data.url;
        }
    }
}

export class PackageController {

    mMonthPackage: MonthPackages = new MonthPackages();
    mEcoPackages: EcoDataPackages = new EcoDataPackages();
    mMorePackages: MorePackages = new MorePackages();
    mTomatoPackages: TomatoPackages = new TomatoPackages();
    mSixtyGBPackages: SixtyGBPackages = new SixtyGBPackages();
    mDayPackages: DayPackages = new DayPackages();
    mDcomDataPackages: DcomDataPackages = new DcomDataPackages();
    mMoreDataDcomPackages: MoreDataDcomPackages = new MoreDataDcomPackages();

    fiels = [this.mMonthPackage, this.mEcoPackages, this.mMorePackages, this.mTomatoPackages, this.mSixtyGBPackages, this.mDayPackages, this.mDcomDataPackages, this.mMoreDataDcomPackages];
    mViettelPakages: Array<Package> = [];
    mAllPackages: Array<Packages> = [];
    constructor() {

    }

    public getAllPackages(): Array<Package> {
        return this.mViettelPakages;
    }

    public getMonthPackages(): MonthPackages {
        return this.mMonthPackage;
    }
    public getEcoDataPackages(): EcoDataPackages {
        return this.mEcoPackages;
    }
    public getMorePackages(): MorePackages {
        return this.mMorePackages;
    }
    public getSixtyGBPackages(): SixtyGBPackages {
        return this.mSixtyGBPackages;
    }
    public getDayPackages(): DayPackages {
        return this.mDayPackages;
    }
    public getTomatoPackages(): TomatoPackages {
        return this.mTomatoPackages;
    }
    public getDcomDataPackages(): DcomDataPackages {
        return this.mDcomDataPackages;
    }
    public getMoreDataDcomPackages(): MoreDataDcomPackages {
        return this.mMoreDataDcomPackages;
    }

    onResponseAppConfig(data) {
        if (data) {
            let dsPackages = data["Trang tính1"];
            let dsPackage = data["Trang tính2"];
            let dataConfig = [
                {
                    p_id: "1",
                    id: "1",
                    name: "Mimax70",
                    price: "70,000",
                    description: "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G.\n\nVới 70.000đ Quý khách sẽ có 3GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau).",
                    data: "3GB",
                    isHot: true,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=mimax70&ch=230583"
                },
                {
                    p_id: "1",
                    id: "2",
                    name: "Mimax90",
                    price: "90,000",
                    description: "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G.\n\nVới 90.000đ Quý khách sẽ có 5GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau)",
                    data: "5GB",
                    isHot: true,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=mimax90&ch=230583"
                },
                {
                    p_id: "1",
                    id: "4",
                    name: "Mimax125",
                    price: "125,000",
                    description: "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G.\n\nVới 125.000đ Quý khách sẽ có 8GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau).",
                    data: "8GB",
                    isHot: false,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=mimax125&ch=230583"
                },
                {
                    p_id: "1",
                    id: "5",
                    name: "Mimax200",
                    price: "200,000",
                    description: "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G.\n\nVới 200.000đ Quý khách sẽ có 15GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau).",
                    data: "15GB",
                    isHot: false,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=mimax200&ch=230583"
                },
                {
                    p_id: "1",
                    id: "6",
                    name: "Umax300",
                    price: "300,000",
                    description: "Với 300.000 đồng, Quý khách được truy cập Internet không giới hạn lưu lượng tốc độ cao. Hết 30GB đầu, tốc độ cao giới hạn về 1Mbps. Chu kỳ gói cước 30 ngày, sau 30 ngày hệ thống tự động gia hạn",
                    data: "30GB",
                    isHot: true,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=umax300&ch=230583"
                },
                {
                    p_id: "2",
                    id: "1",
                    name: "ECOD50",
                    price: "50,000",
                    description: "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G.\n\nVới 50.000đ Quý khách sẽ có 3GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau).",
                    data: "3BG",
                    isHot: false,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=ecod50&ch=230583"
                },
                {
                    p_id: "3",
                    id: "1",
                    name: "G3",
                    price: "9,000",
                    description: "Gói cước G3 giá 9.000đ có 3GB tốc độ cao sử dụng trong 3 giờ. Hết lưu lượng tốc độ cao KH sẽ truy cập theo gói data chính.",
                    data: "3BG",
                    isHot: false,
                    time: "3 Giờ",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=g3&ch=230583"
                },
                {
                    p_id: "3",
                    id: "2",
                    name: "MT20N",
                    price: "20,000",
                    description: "MT20N: 20.000 có 5GB sử dụng đến 24h cùng ngày đăng ký. Hết lưu lượng tốc độ cao KH vẫn truy cập được với tốc độ thông thường.",
                    data: "5GB",
                    isHot: false,
                    time: "24h",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=MT20N&ch=230583"
                },
                {
                    p_id: "4",
                    id: "1",
                    name: "TOMD10",
                    price: "10,000",
                    description: "TOMD10: 10.000đ/lần có 200MB, không giới hạn thời gian sử dụng, hết 200MB ngừng truy cập. Gói TOMD10 sẽ bị hủy nếu khách hàng không sử dụng Data trong vòng 60 ngày.",
                    data: "200MB",
                    isHot: false,
                    time: "60 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=TOMD10&ch=230583"
                },
                {
                    p_id: "4",
                    id: "2",
                    name: "TOMD30",
                    price: "30,000",
                    description: "TOMD30: 30.000đ/lần có 1GB, không giới hạn thời gian sử dụng, hết 1GB ngừng truy cập. Gói TOMD30 sẽ bị hủy nếu khách hàng không sử dụng Data trong vòng 60 ngày.",
                    data: "1GB",
                    isHot: false,
                    time: "60 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=TOMD30&ch=230583"
                },
                {
                    p_id: "5",
                    id: "1",
                    name: "VTVUI",
                    price: "200,000",
                    description: "Phạm vi triển khai gói cước: Trên cả nước.\n\nĐối tượng tham gia: Tất cà các khách hàng là thuê bao Viettel trả trước đang hoạt động 02 chiều đồng thời nằm trong danh sách nhận được tin nhắn khuyến mãi mời tham gia gói cước từ tổng đài.\n\nCú pháp đăng ký: Để tham gia sử dụng gói cước, click đăng ký ngay.\n\nCước phí gói: 100.000đ/lần đăng ký trừ vào tài khoản chính.\n\nKhách hàng được thoải mái nhắn tin, gọi thoại và truy cập 3G tốc độ cao với 100 sms nội mạng + 250 phút gọi nội mạng + 2.5GB.\n\nThời hạn sử dụng: Trong vòng 30 ngày tính từ lúc thuê bao đăng ký thành công.\n\nTính năng gói: Tự gia hạn khi bước qua chu kỳ mới.",
                    data: "250P nội mạng + 2.5GB",
                    isHot: false,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=VTVUI&ch=230583"
                },
                {
                    p_id: "5",
                    id: "2",
                    name: "B100K",
                    price: "100,000",
                    description: "Dành cho thuê bao di động  trả trước nằm trong danh sách.\nSố dư tài khoản từ 100.000đ trở lên.\n\nThông tin ưu đãi từ gói B100K của Viettel:\nCước phí:  100.000đ/lần đăng ký thành công.\nThời gian sử dụng: 30 ngày.\n\nNhững ưu đãi của gói B100K Viettel:\nMiễn phí 500 phút gọi nội mạng Viettel.\nMiễn phí 600Mb data tốc độ cao.",
                    data: "500P nội mạng + 600Mb",
                    isHot: true,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=b100k&ch=230583"
                },
                {
                    p_id: "5",
                    id: "3",
                    name: "B150K",
                    price: "150,000",
                    description: "Dành cho thuê bao di động  trả trước nằm trong danh sách.\nSố dư tài khoản từ 150.000đ trở lên.\n\nThông tin ưu đãi từ gói B150K của Viettel:\nCước phí:  150.000đ/lần đăng ký thành công.\nThời gian sử dụng: 30 ngày.\n\nNhững ưu đãi của gói B150K Viettel:\nMiễn phí 500 phút gọi nội mạng Viettel.\nMiễn phí 500 sms nội mạng Viettel.\nMiễn phí 1.5GB data tốc độ cao.",
                    data: "500P nội mạng + 1.5GB",
                    isHot: false,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=b150k&ch=230583"
                },
                {
                    p_id: "5",
                    id: "4",
                    name: "VTTRE",
                    price: "50,000",
                    description: "Tặng ngay 1GB data tốc độ cao truy cập Internet trên điện thoại. \nTặng ngay 100 phút thoại nội mạng.\nNgay khi hết 1GB miễn phí thuê bao bạn sẽ tự động ngắt kết nối để tiết kiệm tiền ( Nếu bạn muốn tiếp tục truy cập Internet bạn có thể đăng ký mua thêm các gói Max10, Max20, Max30,MAX15, MAX45, MAX65, MT7, MT10 )",
                    data: "100P nội mạng + 1GB",
                    isHot: false,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=VTTRE&ch=230583"
                },
                {
                    p_id: "6",
                    id: "1",
                    name: "MI5D",
                    price: "5,000",
                    description: "MI5D: 5.000đ/lần có 500MB sử dụng đến 24h ngày đăng ký. Hết 500MB tính cước theo gói Mobile Internet đang sử dụng",
                    data: "500MB",
                    isHot: false,
                    time: "24h",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=MI5D&ch=230583"
                },
                {
                    p_id: "6",
                    id: "2",
                    name: "MI10D",
                    price: "10,000",
                    description: "MI10D: 10.000đ/lần có 1GB sử dụng đến 24h ngày đăng ký. Hết 1GB tính cước theo gói Mobile Internet đang sử dụng (nếu có)",
                    data: "1GB",
                    isHot: false,
                    time: "24h",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=MI10D&ch=230583"
                },
                {
                    p_id: "6",
                    id: "3",
                    name: "MI7D",
                    price: "7,000",
                    description: "MI7D: 7.000đ/lần có 700MB sử dụng đến 24h ngày đăng ký. Hết 700MB tính cước theo gói Mobile Internet đang sử dụng",
                    data: "700MB",
                    isHot: false,
                    time: "24h",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=MI7D&ch=230583"
                },
                {
                    p_id: "7",
                    id: "1",
                    name: "D300",
                    price: "300,000",
                    description: "Cước thuê bao: 300.000đ/180 ngày:\n\nMiễn phí 45GB lưu lượng Data/180 ngày. Hết 45GB ngừng truy cập.\n\nKhách hàng đăng kí gói cước D300 có thể mua thêm gói D5 khi sử dụng hết 45GB lưu lượng data.\n\nGói cước không gia hạn tự động sau khi hết chu kỳ 180 ngày, hệ thống có nhắn tin thông báo hết hạn cho khách hàng vào ngày cuối cùng của chu kỳ. KH muốn sử dụng tiếp phải soạn tin đăng ký lại.\n\nKhách hàng đăng kí gói cước D300 có thể mua thêm gói D5.",
                    data: "45GB",
                    isHot: true,
                    time: "180 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=D300&ch=230583"
                },
                {
                    p_id: "7",
                    id: "2",
                    name: "D50",
                    price: "50,000",
                    description: "Là gói cước trọn gói dành cho thuê bao Dcom trả trước. Với 50.000đ Quý khách có 3.5GB sử dụng trong 30 ngày. Hết dung lượng miễn phí sẽ truy cập với tốc độ bình thường",
                    data: "3.5GB",
                    isHot: false,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=D50&ch=230583"
                },
                {
                    p_id: "7",
                    id: "3",
                    name: "D70",
                    price: "70,000",
                    description: "Là gói cước trọn gói dành cho thuê bao Dcom trả trước. Với 70.000đ Quý khách có 7GB sử dụng trong 30 ngày. Hết dung lượng miễn phí sẽ truy cập với tốc độ bình thường",
                    data: "7GB",
                    isHot: true,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=D70&ch=230583"
                },
                {
                    p_id: "7",
                    id: "4",
                    name: "D90",
                    price: "90,000",
                    description: "Là gói cước trọn gói dành cho thuê bao Dcom trả trước. Với 90.000đ Quý khách có 10GB sử dụng trong 30 ngày. Hết dung lượng miễn phí sẽ truy cập với tốc độ bình thường",
                    data: "10GB",
                    isHot: true,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=D90&ch=230583"
                },
                {
                    p_id: "7",
                    id: "5",
                    name: "D120",
                    price: "120,000",
                    description: "Là gói cước trọn gói dành cho thuê bao Dcom trả trước. Với 120.000đ Quý khách có 12GB sử dụng trong 30 ngày. Hết dung lượng miễn phí sẽ truy cập với tốc độ bình thường",
                    data: "12GB",
                    isHot: false,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=D120&ch=230583"
                },
                {
                    p_id: "7",
                    id: "6",
                    name: "D200",
                    price: "200,000",
                    description: "Là gói cước trọn gói dành cho thuê bao Dcom trả trước. Với 200.000đ Quý khách có 20GB sử dụng trong 30 ngày. Hết dung lượng miễn phí sẽ truy cập với tốc độ bình thường",
                    data: "20GB",
                    isHot: false,
                    time: "30 ngày",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=D200&ch=230583"
                },
                {
                    p_id: "7",
                    id: "7",
                    name: "D500",
                    price: "500,000",
                    description: "Với 500.000đ Quý khách có 48GB tốc độ cao trong vòng 12 tháng tính từ tháng đăng ký, hết tốc độ cao miễn phí sử dụng tốc độ thường",
                    data: "48GB",
                    isHot: true,
                    time: "12 tháng",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=D500&ch=230583"
                },
                {
                    p_id: "7",
                    id: "8",
                    name: "D900",
                    price: "900,000",
                    description: "Là gói cước trọn gói dành cho thuê bao Dcom trả trước. Với 900.000đ Quý khách có 84GB trong vòng 12 tháng tính từ tháng đăng ký, hết tốc độ cao miễn phí sử dụng tốc độ thường.",
                    data: "84GB",
                    isHot: true,
                    time: "12 tháng",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=D900&ch=230583"
                },
                {
                    p_id: "8",
                    id: "1",
                    name: "D5",
                    price: "5,000",
                    description: "Cước thuê bao: 5.000đ.\n\nMiễn phí 1GB lưu lượng Data đến 24h ngày đăng kí. Hết 1GB tính theo lưu lượng gói D300K.\n\nGói cước không tự động gia hạn, khách hàng có thể đăng kí gói D5 nhiều lần trong chu kì gói cước D300K.Không cộng dồn lưu lượng của lần đăng ký trước nếu còn\n\nThuê bao có thể đăng ký gói D5 khi đã sử dụng hết hoặc chưa hết lưu lượng miễn phí của gói D300K.Không cộng dồn lưu lượng của lần đăng ký trước nếu còn.",
                    data: "1GB",
                    isHot: false,
                    time: "24h",
                    url: "https://shop.viettel.vn/frame/dang-ky-goi-cuoc?code=D5&ch=230583"
                }
            ]
            this.onParsePackage(dataConfig);
            this.onParsePackages(dsPackages);
        }
    }

    onParsePackage(data) {
        if (data) {
            this.mViettelPakages = [];
            data.forEach(element => {
                this.mViettelPakages.push(new Package(element));
            });
        }
    }

    getPackageByName(name: string) {
        if (this.mViettelPakages.length == 0) return new Package();
        for (let p of this.mViettelPakages) {
            if (p.name.toLowerCase() == name.toLowerCase()) {
                return p;
            }
        }
        return new Package();

    }

    getPackgeByID(id) {
        if (this.mViettelPakages.length == 0) return new Package();
        for (let p of this.mViettelPakages) {
            if (p.id == id) {
                return p;
            }
        }
        return new Package();
    }

    getPackagesByName(nName: string) {
        if (this.mAllPackages.length == 0) return new Packages();
        for (let p of this.mAllPackages) {
            let name = Utils.bodauTiengViet(p.name.toLowerCase());
            name = Utils.boDauCach(name);
            if (name == nName) {
                let p_id = p.id;
                return this.getPackagesById(p_id);
            }
        }
        return new Packages();
    }

    getPackagesById(p_id) {
        if (p_id == 1) {
            return this.getMonthPackages();
        } else if (p_id == 2) {
            return this.getEcoDataPackages();
        } else if (p_id == 3) {
            return this.getMorePackages();
        } else if (p_id == 4) {
            return this.getTomatoPackages();
        } else if (p_id == 5) {
            return this.getSixtyGBPackages();
        } else if (p_id == 6) {
            return this.getDayPackages();
        } else if (p_id == 7) {
            return this.getDcomDataPackages();
        } else if (p_id == 8) {
            return this.getMoreDataDcomPackages();
        } else {
            return new MonthPackages();
        }
    }

    onParsePackages(data) {
        if (data) {
            data.forEach((element) => {
                this.mAllPackages.push(new Packages(element));
                if (element.id == 1) {
                    this.getMonthPackages().parseData(element);
                    this.getMonthPackages().items = this.getPackageByPID(element.id);

                } else if (element.id == 2) {
                    this.getEcoDataPackages().parseData(element);
                    this.getEcoDataPackages().items = this.getPackageByPID(element.id);

                } else if (element.id == 3) {
                    this.getMorePackages().parseData(element);
                    this.getMorePackages().items = this.getPackageByPID(element.id);

                } else if (element.id == 4) {
                    this.getTomatoPackages().parseData(element);
                    this.getTomatoPackages().items = this.getPackageByPID(element.id);

                } else if (element.id == 5) {
                    this.getSixtyGBPackages().parseData(element);
                    this.getSixtyGBPackages().items = this.getPackageByPID(element.id);

                } else if (element.id == 6) {
                    this.getDayPackages().parseData(element);
                    this.getDayPackages().items = this.getPackageByPID(element.id);

                } else if (element.id == 7) {
                    this.getDcomDataPackages().parseData(element);
                    this.getDcomDataPackages().items = this.getPackageByPID(element.id);

                } else if (element.id == 8) {
                    this.getMoreDataDcomPackages().parseData(element);
                    this.getMoreDataDcomPackages().items = this.getPackageByPID(element.id);

                } else {

                }
            });
        }
    }

    public getPackageByPID(id: number) {
        if (this.mViettelPakages.length == 0) return [];
        return this.mViettelPakages.filter(element => {
            return element.p_id == id;
        });
    }
}