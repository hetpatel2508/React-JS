const { data: user } = useQuery(['user', email], getUserByEmail)

const { isIdle, data: projects } = useQuery(
  ['projects', userId],
  getProjectsByUser,
  {
    enabled: false, // The query will not automatically refetch in the background 
                    //  or  disable a query from automatically running

    enabled: !!user.id,// The query will not execute until the user.id exists

    refetchOnWindowFocus: false,  // when changing tabs or app in window it reload data
        // even in stale mode to stop this unwanted reloads on screen/tab changing it is used
    
    retry : 6  //will retry failing requests 6 times before showing the final error message
        //in react-query it retry to fetch 3 times if error comes but after 3rd time it return dedicated error message

    
  }
)