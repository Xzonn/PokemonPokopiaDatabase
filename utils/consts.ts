import { DescriptionsProps, TablePaginationConfig, TableProps } from "antd";
import { ColumnFilterItem } from "antd/es/table/interface";

import { EPokemonType } from "@/types";

export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
  xxxl: 1920,
};

export const DEFAULT_TITLE = "宝可梦 Pokopia 数据库";

export const PokemonTypeFilters: ColumnFilterItem[] = EPokemonType.map((type) => ({
  text: type,
  value: type,
}));

export const TableCommonProps: Partial<TableProps<any>> = {
  scroll: {
    scrollToFirstRowOnChange: true,
    x: true,
  },
  sticky: { offsetHeader: 0 },
  size: "small",
  tableLayout: "fixed",
};

export const DescriptionsCommonProps: Partial<DescriptionsProps> = {
  size: "small",
  bordered: true,
  column: { xs: 1, sm: 1, md: 1, lg: 3, xl: 3, xxl: 3, xxxl: 3 },
};

export const DescriptionsCommonProps1: Partial<DescriptionsProps> = {
  ...DescriptionsCommonProps,
  className: "description-1",
  column: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1, xxxl: 1 },
};

export const DescriptionsCommonProps2: Partial<DescriptionsProps> = {
  ...DescriptionsCommonProps,
  className: "description-2",
  column: { xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2, xxxl: 2 },
};

export const DescriptionsCommonProps4: Partial<DescriptionsProps> = {
  ...DescriptionsCommonProps,
  className: "description-4",
  column: { xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 4, xxxl: 4 },
};

export const PaginationConfig: TablePaginationConfig = {
  defaultPageSize: 100,
  showSizeChanger: true,
  pageSizeOptions: ["100", "200", "500", "1000"],
};
