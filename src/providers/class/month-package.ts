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
            this.onParsePackage(dsPackage);
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