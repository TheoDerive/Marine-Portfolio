export interface StoreInterface {
  scrollPosition: number;
  setScrollPosition: (scrollPosition: number) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
