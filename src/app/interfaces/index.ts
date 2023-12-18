export interface ResponseAPI {
  site_id: SiteID;
  seller: Seller;
  country_default_time_zone: string;
  paging: Paging;
  results: Result[];
  sort: Sort;
  available_sorts: Sort[];
  filters: any[];
  available_filters: AvailableFilter[];
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id: string;
  name: string;
  results: number;
}

export interface Sort {
  id: string;
  name: string;
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface Result {
  id: string;
  title: string;
  condition: Condition;
  thumbnail_id: string;
  catalog_product_id: null | string;
  listing_type_id: ListingTypeID;
  permalink: string;
  buying_mode: BuyingMode;
  site_id: SiteID;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: CurrencyID;
  order_backend: number;
  price: number;
  original_price: number | null;
  sale_price: null;
  available_quantity: number;
  official_store_id: number;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: Date;
  seller: Seller;
  attributes: Attribute[];
  installments: Installments | null;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: any[];
  inventory_id: null | string;
  official_store_name?: OfficialStoreName;
  variation_filters?: VariationFilter[];
  variations_data?: { [key: string]: VariationsDatum };
}

export interface Attribute {
  id: string;
  name: string;
  value_id: null | string;
  value_name: null | string;
  attribute_group_id: AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  value_struct: Struct | null;
  values: AttributeValue[];
  source: number;
  value_type: ValueType;
}

export enum AttributeGroupID {
  Main = "MAIN",
  Others = "OTHERS",
}

export enum AttributeGroupName {
  Otros = "Otros",
  Principales = "Principales",
}

export interface Struct {
  number: number;
  unit: Unit;
}

export enum Unit {
  CM = "cm",
  G = "g",
  Kg = "kg",
  Mm = "mm",
  Va = "VA",
}

export enum ValueType {
  List = "list",
  Number = "number",
  NumberUnit = "number_unit",
  String = "string",
}

export interface AttributeValue {
  id: null | string;
  name: null | string;
  struct: Struct | null;
  source: number;
}

export enum BuyingMode {
  BuyItNow = "buy_it_now",
}

export enum Condition {
  New = "new",
}

export enum CurrencyID {
  Ars = "ARS",
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: CurrencyID;
}

export enum ListingTypeID {
  GoldSpecial = "gold_special",
}

export enum OfficialStoreName {
  APCSoluciones = "APC Soluciones",
  Dell = "Dell",
  Linksys = "Linksys",
}

export interface Seller {
  id: number;
  nickname: Nickname;
}

export enum Nickname {
  Oportutek = "OPORTUTEK",
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: LogisticType;
  mode: Mode;
  tags: Tag[];
  benefits: null;
  promise: null;
}

export enum LogisticType {
  CrossDocking = "cross_docking",
}

export enum Mode {
  Me2 = "me2",
}

export enum Tag {
  MandatoryFreeShipping = "mandatory_free_shipping",
  SelfServiceIn = "self_service_in",
}

export enum SiteID {
  Mla = "MLA",
}

export enum VariationFilter {
  Color = "COLOR",
}

export interface VariationsDatum {
  thumbnail: string;
  ratio: string;
  name: Name;
  pictures_qty: number;
  inventory_id?: string;
}

export enum Name {
  Gris = "Gris",
  Negro = "Negro",
  Plateado = "Plateado",
}
