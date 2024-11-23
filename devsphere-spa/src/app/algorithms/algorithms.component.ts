import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgxEchartsDirective } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-algorithms',
  standalone: true,
  imports: [MatButtonModule, NgxEchartsDirective, MatChipsModule, CommonModule],
  templateUrl: './algorithms.component.html',
  styleUrl: './algorithms.component.css'
})

export class AlgorithmsComponent implements AfterViewInit {
  dataSortStyles = [
    { value: 'random', viewValue: 'Random' },
    { value: 'sorted', viewValue: 'Sorted' },
    { value: 'reversed', viewValue: 'Reversed' },
    { value: 'nearlySorted', viewValue: 'Nearly Sorted' },
    { value: 'fewUnique', viewValue: 'Few Unique' }
  ];
  dataSortAlgos = [
    { value: 'bubble', viewValue: 'Bubble Sort' },
    { value: 'selection', viewValue: 'Selection Sort' },
    { value: 'insertion', viewValue: 'Insertion Sort' },
    { value: 'merge', viewValue: 'Merge Sort' },
    { value: 'quick', viewValue: 'Quick Sort' },
    { value: 'heap', viewValue: 'Heap Sort' },
    { value: 'radix', viewValue: 'Radix Sort' },
    { value: 'bucket', viewValue: 'Bucket Sort' },
    { value: 'counting', viewValue: 'Counting Sort' }
  ];
  options!: EChartsOption;
  data: number[] = [];
  dataSortStyle: string;
  dataSortAlgo: string;
  xAxisData: number[] = [];
  explanation!: string;
  arrayAccessCount!: number;
  comparisonCount!: number;

  constructor() {
    this.dataSortStyle = 'random';
    this.dataSortAlgo = 'bubble';
    this.updateExplanation();
    this.arrayAccessCount = 0;
    this.comparisonCount = 0;
    for (let i = 1; i < 26; i++) {
      this.xAxisData.push(i);
    }
  }

  ngOnInit(): void {
    this.generateTable();
  }

  ngAfterViewInit() {
    this.generateTable();
  }

  onDataStyleChange(value: any) {
    this.dataSortStyle = value;
    this.generateTable();
  }

  onSortAlgoChange(value: any) {
    this.dataSortAlgo = value;
    this.updateExplanation();
  }

  resetCounters() {
    this.arrayAccessCount = 0;
    this.comparisonCount = 0;
  }

  onSortButtonClick() {
    console.log('Sort Style: ' + this.dataSortStyle);
    console.log('Sort Algorithm: ' + this.dataSortAlgo);
    this.resetCounters();
    switch (this.dataSortAlgo) {
      case 'bubble':
        this.sortBubble();
        break;
      case 'selection':
        this.sortSelection();
        break;
      case 'insertion':
        this.sortInsertion();
        break;
      case 'merge':
        this.sortMerge();
        break;
      case 'quick':
        this.sortQuick();
        break;
      case 'heap':
        this.sortHeap();
        break;
      case 'radix':
        this.sortRadix();
        break;
      case 'bucket':
        this.sortBucket();
        break;
      case 'counting':
        this.sortCounting();
        break;
    }
  }

  onResetButtonClick() {
    this.generateTable();
    this.resetCounters();
  }

  generateTable() {
    switch (this.dataSortStyle) {
      case 'random':
        this.data = this.generateRandomData();
        break;
      case 'sorted':
        this.data = this.generateSortedData();
        break;
      case 'reversed':
        this.data = this.generateReversedData();
        break;
      case 'nearlySorted':
        this.data = this.generateNearlySortedData();
        break;
      case 'fewUnique':
        this.data = this.generateFewUniqueData();
        break;
    }
    console.log(this.data);
    
    this.options = {
      legend: {
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: this.data,
          itemStyle: { color: 'rgba(84,112,198,255)' },
        },
      ],
      animationEasing: 'elasticOut',
      animationDuration: 1000,
      animationDurationUpdate: 100,
      animationEasingUpdate: 'bounceIn',


    };
  }

  updateExplanation() {
    switch (this.dataSortAlgo) {
      case 'bubble':
        this.explanation = 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.';
        break;
      case 'selection':
        this.explanation = 'Selection Sort is an in-place comparison sorting algorithm. It divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list.';
        break;
      case 'insertion':
        this.explanation = 'Insertion Sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.';
        break;
      case 'merge':
        this.explanation = 'Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. Most implementations produce a stable sort, meaning that the implementation preserves the input order of equal elements in the sorted output.';
        break;
      case 'quick':
        this.explanation = 'Quick Sort is an efficient, in-place, comparison-based, divide and conquer sorting algorithm. Developed by Tony Hoare in 1959, it is still a commonly used algorithm for sorting.';
        break;
      case 'heap':
        this.explanation = 'Heap Sort is a comparison-based sorting algorithm. It can be thought of as an improved selection sort: like that algorithm, it divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region.';
        break;
      case 'radix':
        this.explanation = 'Radix Sort is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their radix.';
        break;
      case 'bucket':
        this.explanation = 'Bucket Sort is a distribution sort that works by partitioning an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.';
        break;
      case 'counting':
        this.explanation = 'Counting Sort is an integer sorting algorithm that operates by counting the number of objects that have each distinct key value, and using arithmetic on those counts to determine the positions of each key value in the output sequence.';
        break;
    }
  }

  generateRandomData(): number[] { 
    const array = this.generateSortedData();
    for (let i = 0; i < 100; i++) {
      const index1 = Math.floor(Math.random() * 25);
      const index2 = Math.floor(Math.random() * 25);
      [array[index1], array[index2]] = [array[index2], array[index1]];
    }
    return array;
  }

  generateSortedData(): number[] { 
    return Array.from({ length: 25 }, (_, i) => i + 1); 
  }

  generateReversedData(): number[] { 
    return Array.from({ length: 25 }, (_, i) => 25 - i); 
  }

  generateNearlySortedData(): number[] { 
    const array = this.generateSortedData();
    for (let i = 0; i < 10; i++) {
      const index1 = Math.floor(Math.random() * 25);
      var index2 = index1 + Math.floor(Math.random() * 5);
      while (index2 >= 25) {
        index2 = index1 + Math.floor(Math.random() * 5);
      }
      [array[index1], array[index2]] = [array[index2], array[index1]];
    }
    return array;
  }

  generateFewUniqueData(): number[] { 
    return Array.from({ length: 25 }, () => (Math.floor(Math.random() * 5) + 1));
  }

  async sortBubble() {
    if (this.options && this.options.series && Array.isArray(this.options.series)) {
      const series = this.options.series[0];
      if (series && series.data) {
        const data = series.data as number[];
        const itemStyle = (series as any).itemStyle;
        for (let n = data.length; n > 1; n--) {
          for (let i = 0; i < n - 1; i++) {
            this.comparisonCount++;
            if (data[i] > data[i + 1]) {
              [data[i], data[i + 1]] = [data[i + 1], data[i]];
              this.arrayAccessCount += 4;
            }else {
              this.arrayAccessCount += 2;
            }
            itemStyle.color = (params: any) => {
              if (params.dataIndex === i || params.dataIndex === i + 1) {
                return 'red';
              }
              return 'rgba(84,112,198,255)'; 
            };
            this.options = { ...this.options }; // Trigger change detection
            await delay(150);
          }
        }
        this.sortComplete(data, itemStyle);
      }
    } 
  }

  async sortSelection(){
    if (this.options && this.options.series && Array.isArray(this.options.series)) {
      const series = this.options.series[0];
      if (series && series.data) {
        const data = series.data as number[];
        const itemStyle = (series as any).itemStyle;
        for(let i = 0; i < data.length -1; i++){
          this.comparisonCount++;
          let min_idx = i;
          for(let j = i + 1; j < data.length; j++){
            this.comparisonCount++;

            itemStyle.color = (params: any) => {
              if (params.dataIndex === min_idx || params.dataIndex === j) {
                return 'red';
              }
              return 'rgba(84,112,198,255)'; 
            };
            this.options = { ...this.options }; // Trigger change detection
            await delay(150);

            this.arrayAccessCount += 2;
            this.comparisonCount++;
            if(data[j] < data[min_idx]){
              min_idx = j;
            }
          }
          [data[i], data[min_idx]] = [data[min_idx], data[i]];
          this.arrayAccessCount += 4;
        }
        this.options = { ...this.options };
        this.sortComplete(data, itemStyle);
      }
    }
  }

  async sortInsertion(){
    if (this.options && this.options.series && Array.isArray(this.options.series)) {
      const series = this.options.series[0];
      if (series && series.data) {
        const data = series.data as number[];
        const itemStyle = (series as any).itemStyle;

        for(let i = 0; i < data.length; i++){
          this.comparisonCount++;
          let keyValue = data[i];
          this.arrayAccessCount++;
          let j = i - 1;
          while(j >= 0 && data[j]>keyValue){
            this.arrayAccessCount++;
            this.comparisonCount++;
            itemStyle.color = (params: any) => {
              if (params.dataIndex === j || params.dataIndex === i) {
                return 'red';
              }
              return 'rgba(84,112,198,255)'; 
            };
            this.options = { ...this.options }; // Trigger change detection
            await delay(150)
            data[j+1] = data[j]
            this.arrayAccessCount += 2;
            j--; 
          }
          data[j+1] = keyValue;
          this.arrayAccessCount += 1;
        }
        this.options = { ...this.options };
        this.sortComplete(data, itemStyle);
      }
    }
  }

  async sortMerge(){
    if (this.options && this.options.series && Array.isArray(this.options.series)) {
      const series = this.options.series[0];
      if (series && series.data) {
        const data = series.data as number[];
        const itemStyle = (series as any).itemStyle || {};
        
        let right: number, wid: number, rend: number;
        let i,j,m,t;
        let temp = new Array;

        for (let k = 1; k < data.length; k *= 2) {
          for (let left = 0; left + k < data.length; left += k * 2) {
            right = left + k;
            rend = right + k;
            if (rend > data.length) {
              rend = data.length;
            }
            m = left;
            i = left;
            j = right;
            while (i < right && j < rend) {
              this.comparisonCount += 3;
              if (data[i] <= data[j]) {
                temp[m] = data[i];
                this.arrayAccessCount += 2; // One read and one write
                i++;
              } else {
                temp[m] = data[j];
                this.arrayAccessCount += 2; // One read and one write
                j++;
              }
              m++;
            }
            while (i < right) {
              this.comparisonCount++;
              temp[m] = data[i];
              this.arrayAccessCount += 2; // One read and one write
              i++;
              m++;
            }
            while (j < rend) {
              this.comparisonCount++;
              temp[m] = data[j];
              this.arrayAccessCount += 2; // One read and one write
              j++;
              m++;
            }
            for (m = left; m < rend; m++) {
              this.comparisonCount++;
              data[m] = temp[m];
              this.arrayAccessCount += 2; // One read and one write
            }
            itemStyle.color = (params: any) => {
              if (params.dataIndex >= left && params.dataIndex < rend) {
                return 'red';
              }
              return 'rgba(84,112,198,255)'; 
            };
            this.options = { ...this.options };
            await delay(150); 
          }
        }
        this.options = { ...this.options };
        this.sortComplete(data, itemStyle);
      }
    }

  }

  async sortQuick() {
    if (this.options && this.options.series && Array.isArray(this.options.series)) {
      const series = this.options.series[0];
      if (series && series.data) {
        const data = series.data as number[];
        const itemStyle = (series as any).itemStyle || {};

        const quickSort = async (arr: number[], left: number, right: number) => {
          if (left < right) {
            const pivotIndex = await partition(arr, left, right);
            await quickSort(arr, left, pivotIndex - 1);
            await quickSort(arr, pivotIndex + 1, right);
          }
        };
  
        const partition = async (arr: number[], left: number, right: number) => {
          const pivot = arr[right];
          let i = left - 1;
  
          for (let j = left; j < right; j++) {
            if (arr[j] < pivot) {
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }
  
            itemStyle.color = (params: any) => {
              if (params.dataIndex === j || params.dataIndex === i) {
                return 'red';
              }
              return 'rgba(84,112,198,255)'; 
            };
            this.options = { ...this.options };
            await delay(150); 
          }
  
          [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  
          itemStyle.color = (params: any) => {
            if (params.dataIndex === right || params.dataIndex === i + 1) {
              return 'red';
            }
            return 'rgba(84,112,198,255)'; 
          };
          this.options = { ...this.options };
          await delay(150); 
  
          return i + 1;
        };
  
        await quickSort(data, 0, data.length - 1);
        this.options = { ...this.options };
        this.sortComplete(data, itemStyle);
      }
    }
  }

  async sortHeap() {
    if (this.options && this.options.series && Array.isArray(this.options.series)) {
      const series = this.options.series[0];
      if (series && series.data) {
        const data = series.data as number[];
        const itemStyle = (series as any).itemStyle || {};
  
        const heapify = async (arr: number[], length: number, i: number) => {
          let largest = i;
          const left = 2 * i + 1;
          const right = 2 * i + 2;
  
          if (left < length && arr[left] > arr[largest]) {
            largest = left;
          }
  
          if (right < length && arr[right] > arr[largest]) {
            largest = right;
          }
  
          if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
  
            // Update the chart
            itemStyle.color = (params: any) => {
              if (params.dataIndex === i || params.dataIndex === largest) {
                return 'red';
              }
              return 'rgba(84,112,198,255)'; 
            };
            this.options = { ...this.options };
            await delay(150); 
  
            await heapify(arr, length, largest);
          }
        };
  
        const heapSort = async (arr: number[]) => {
          const length = arr.length;
  
          for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
            await heapify(arr, length, i);
          }
  
          for (let i = length - 1; i >= 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
  
            // Update the chart
            itemStyle.color = (params: any) => {
              if (params.dataIndex === 0 || params.dataIndex === i) {
                return 'red';
              }
              return 'rgba(84,112,198,255)'; 
            };
            this.options = { ...this.options };
            await delay(150); 
  
            await heapify(arr, i, 0);
          }
        };
  
        await heapSort(data);
        this.options = { ...this.options };
        this.sortComplete(data, itemStyle);
      }
    }
  }

  async sortRadix() {
    if (this.options && this.options.series && Array.isArray(this.options.series)) {
      const series = this.options.series[0];
      if (series && series.data) {
        const data = series.data as number[];
        const itemStyle = (series as any).itemStyle || {};

        const getMax = (arr: number[]) => {
          let max = arr[0];
          for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
              max = arr[i];
            }
          }
          return max;
        };
  
        const countingSort = async (arr: number[], exp: number) => {
          const output = new Array(arr.length).fill(0);
          const count = new Array(10).fill(0);
  
          for (let i = 0; i < arr.length; i++) {
            const index = Math.floor(arr[i] / exp) % 10;
            count[index]++;
          }
  
          for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
          }
  
          for (let i = arr.length - 1; i >= 0; i--) {
            const index = Math.floor(arr[i] / exp) % 10;
            output[count[index] - 1] = arr[i];
            count[index]--;
          }
  
          for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
  
            // Update the chart
            itemStyle.color = (params: any) => {
              if (params.dataIndex === i) {
                return 'red';
              }
              return 'rgba(84,112,198,255)'; 
            };
            this.options = { ...this.options };
            await delay(150); 
          }
        };
  
        const radixSort = async (arr: number[]) => {
          const max = getMax(arr);
  
          for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            await countingSort(arr, exp);
          }
        };
  
        await radixSort(data);
        this.options = { ...this.options };
        this.sortComplete(data, itemStyle);
      }
    }
  }

  async sortBucket() {
    if (this.options && this.options.series && Array.isArray(this.options.series)) {
      const series = this.options.series[0];
      if (series && series.data) {
        const data = series.data as number[];
        const itemStyle = (series as any).itemStyle || {};
  
        const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  
        const bucketSort = async (arr: number[], bucketSize: number) => {
          if (arr.length === 0) {
            return arr;
          }
  
          let i,
            minValue = arr[0],
            maxValue = arr[0];
          arr.forEach((currentVal) => {
            if (currentVal < minValue) {
              minValue = currentVal;
            } else if (currentVal > maxValue) {
              maxValue = currentVal;
            }
          });
  
          const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
          const allBuckets = new Array(bucketCount);
  
          for (i = 0; i < allBuckets.length; i++) {
            allBuckets[i] = [];
          }
  
          arr.forEach((currentVal) => {
            allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
          });
  
          arr.length = 0;
  
          for (i = 0; i < allBuckets.length; i++) {
            allBuckets[i].sort((a: number, b: number) => a - b);
            for (let j = 0; j < allBuckets[i].length; j++) {
              arr.push(allBuckets[i][j]);
  
              // Update the chart
              itemStyle.color = (params: any) => {
                if (params.dataIndex === arr.length - 1) {
                  return 'red';
                }
                return 'rgba(84,112,198,255)'; 
              };
              this.options = { ...this.options };
              await delay(150);
            }
          }
          return arr;
        };
  
        await bucketSort(data, 5);
        this.options = { ...this.options }; 
        this.sortComplete(data, itemStyle);
      }
    }
  }

  async sortCounting() {
    if (this.options && this.options.series && Array.isArray(this.options.series)) {
      const series = this.options.series[0];
      if (series && series.data) {
        const data = series.data as number[];
        const itemStyle = (series as any).itemStyle || {};
  
        const countingSort = async (arr: number[]) => {
          const max = Math.max(...arr);
          const min = Math.min(...arr);
          const range = max - min + 1;
          const count = new Array(range).fill(0);
          const output = new Array(arr.length).fill(0);
  
          for (let i = 0; i < arr.length; i++) {
            count[arr[i] - min]++;
          }
  
          for (let i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
          }
  
          for (let i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i] - min] - 1] = arr[i];
            count[arr[i] - min]--;
  
            // Update the chart
            itemStyle.color = (params: any) => {
              if (params.dataIndex === i) {
                return 'red';
              }
              return 'rgba(84,112,198,255)'; 
            };
            this.options = { ...this.options };
            await delay(150);
          }
  
          for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
          }
        };
  
        await countingSort(data);
        this.options = { ...this.options }; 
        this.sortComplete(data, itemStyle);
      }
    }
  }


  async sortComplete(data: any, itemStyle: any){
    for (let i = 0; i < data.length + 1; i++) {
      itemStyle.color = (params: any) => {
        if (params.dataIndex === i) {
          return 'green';
        }
        return 'rgba(84,112,198,255)'; 
      };
      this.options = { ...this.options };
      await delay(25);
    }
  }
}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}