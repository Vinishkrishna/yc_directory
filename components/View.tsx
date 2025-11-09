import Ping from '@/components/Ping';
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { writeClient } from '@/sanity/lib/write-client';
import { after } from 'next/server';

//unstable_after allows you to schedule work to be executed after a response is finished.This is useful for tasks and other side effects that should not block the response,such as logging and analytics

//In this case we want to schedule the work after our response to getting views is done we'll then update the views in the background without blocking the UI to do just we just have to do this import after
const View = async ({id}:{id:string}) => {
  const {views: totalViews} = await client.withConfig({useCdn:false}).fetch(STARTUP_VIEWS_QUERY,{id});
  after(async () => writeClient.patch(id).set({views:totalViews + 1}).commit()); //patch is used for update //these two request will be executed sequentialy and we won't see anthing in UI until they are executed
  return (
    <div className='view-container'>
        <div className='absolute -top-2 -right-2'>
            <Ping/>
        </div>
        <p className='view-text'>
            <span className='font-black'>{totalViews} views</span>
        </p>
    </div>
  );
};


export default View;