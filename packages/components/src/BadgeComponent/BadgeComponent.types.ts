export interface IBadgeCss{
    fontColor?:string,
    color:string
}
export interface IBadgeLabel extends IBadgeCss{
    label:number | string;
}
export interface IBadgeProps{
    label: string;
    labelFontColor?:string;
    labelBackground?:string;
  }