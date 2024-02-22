<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Cache\RateLimiter;
use Symfony\Component\HttpFoundation\Response;

class LimitRequestsByIp
{
    protected $limiter;

    public function __construct(RateLimiter $limiter)
    {
        $this->limiter = $limiter;
    }

    public function handle($request, Closure $next, $limit = 1, $decay = 1)
    {
        $key = 'limit-requests-' . $request->ip();

        if ($this->limiter->tooManyAttempts($key, $limit)) {
            return response()->json(['error' => 'Too many requests. Please try again later.'], Response::HTTP_TOO_MANY_REQUESTS);
        }

        $this->limiter->hit($key, $decay);

        return $next($request);
    }
}
