import { ref, reactive, computed, onMounted } from 'vue';
import mockData from '@/data/mockData.json';


const rawData = ref([]);
const isLoading = ref(false);
const error = ref(null);

const metrics = reactive({
    totalShipments: 0,
    averageValueUSD: 0,
    errorRate: '0%',
});

const filters = reactive({
    searchQuery: '',
    status: 'All',
});


const resetFilters = () => {
    filters.searchQuery = '';
    filters.status = 'All';
};


export function useAnalyticsData() {

    
    const updateMetrics = (data) => {
        if (!data || data.length === 0) {
             metrics.totalShipments = 0;
             metrics.averageValueUSD = 0;
             metrics.errorRate = '0%';
             return;
        }

        const totalErrors = data.filter(item => item.status === 'Error').length;
        
        const totalValue = data.reduce((sum, item) => sum + Number(item.valueUSD), 0);

        metrics.totalShipments = data.length;
        metrics.averageValueUSD = Math.round(totalValue / data.length).toLocaleString();
        metrics.errorRate = `${((totalErrors / data.length) * 100).toFixed(1)}%`;
    };

    
    const filteredData = computed(() => {
        let data = rawData.value;
        
        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            data = data.filter(item => 
                item.referenceID.toLowerCase().includes(query) ||
                (item.description && item.description.toLowerCase().includes(query))
            );
        }
        
        if (filters.status && filters.status !== 'All') {
            data = data.filter(item => item.status === filters.status);
        }
        
        return data;
    });

    const fetchData = async () => {
        if (isLoading.value) return; 
        if (rawData.value.length > 0) return; 
        isLoading.value = true;
        error.value = null;

        try {
            
            await new Promise(resolve => setTimeout(resolve, 500)); 
            
            
            rawData.value = mockData;
            
            
            updateMetrics(mockData);

        } catch (err) {
            console.error("Data Fetch Error:", err);
            error.value = 'Failed to load data.';
        } finally {
            isLoading.value = false;
        }
    };

    
    onMounted(() => {
        fetchData();
    });

    return {
        metrics,
        filters,
        isLoading,
        error,
        filteredData,
        fetchData,
        resetFilters 
    };
}