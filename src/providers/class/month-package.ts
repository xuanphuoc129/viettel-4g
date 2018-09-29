export class Packages{
    name: string = "Goi thang";
    title: string = "Trọn gói chỉ từ 70.000đ - Sử dụng trên mạng 3G/4G";
    description: string = "";
    items: Array<Package> = [];
    constructor(){
        this.items.push(new Package());
        this.items.push(new Package());
        this.items.push(new Package());
        this.items.push(new Package());
    }

    parseData(data){
        if("name" in data)this.name = data.name;
        if("title" in data)this.title = data.title;
        if("description" in data)this.description = data.description;
        if("items" in data)this.parseItems(data.items);
    }

    parseItems(data){
        if(data){
            this.items = [];
            data.forEach(element => {
                this.items.push(new Package(element));
            });
        }
    }
}

export class Package{
    id: number = -1;
    name: string = "Mimax 70";
    data: string = "3Gb";
    price: string = "70,000 đ";
    time: string  = "30 ngày";
    isHot: boolean = true;
    description: string = "";
    constructor(data?:any){
        if(data){
            this.parseData(data);
        }
    }

    parseData(data){
        if(data){
            if("id" in data)this.id = data.id;
            if("name" in data)this.name = data.name;
            if("data" in data)this.data = data.data;
            if("price" in data)this.price = data.price;
            if("time" in data)this.time = data.time;
            if("isHot" in data)this.isHot = data.isHot;
            if("description" in data)this.description = data.description;
        }
    }
}