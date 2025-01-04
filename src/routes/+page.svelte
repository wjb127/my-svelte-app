<script>
    import { supabase } from '$lib/supabaseClient';
    import { onMount } from 'svelte';

    let data = [];

    onMount(async () => {
        const { data: items, error } = await supabase
            .from('your_table')
            .select('*');
        
        if (error) {
            console.error('Error:', error);
        } else {
            data = items;
        }
    });
</script>

<h1>데이터 목록</h1>
{#each data as item}
    <div>{item.name}</div>
{/each}
